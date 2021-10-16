import "./index.less"
import {useState, useEffect} from "react";
import ProLayout, {ProBreadcrumb} from "@ant-design/pro-layout"
import {message} from "antd";
import testMenus from "./menu"
import AppContainer from "@/pages/components/appContainer";


const Main = (props) => {
    let con = 'Pro Layouts'
    const [hidden, setHidden] = useState(true);
    const [activeKey, setActiveKey] = useState("/首页");

    useEffect(_ => {
        if (localStorage.getItem("login") !== "1") {
            setHidden(true);
            message.error('验证失效', 1, () => {
                    props.history.replace("/");
                }
            ).then(r => r);
        } else {
            setHidden(false)
        }
    }, [props.history]);

    return (
        hidden ?
            "" :
            <div className="app-content">
                <ProLayout
                    fixedHeader
                    fixSiderbar
                    menu={{request: async () => testMenus}}
                    title="管理系统"
                    logo="logo"
                    menuProps={{
                        onClick: item => setActiveKey(item.key),
                        activeKey: activeKey
                    }}
                    waterMarkProps={{
                        content: con,
                        width: con.length * 5,
                        height: 80,
                        fontSize: 18,
                        fontColor: "rgba(0,0,0,.18)",
                        gapX: 120,
                        gapY: 120,
                        rotate: -20
                    }}
                    headerContentRender={() => {
                        return (<div><ProBreadcrumb/>headerContentRender</div>)
                    }}
                    rightContentRender={() => {
                        return (<div style={{cursor: "pointer"}} onClick={() => {
                            localStorage.removeItem("login")
                            props.history.replace({
                                pathname: "/"
                            })

                        }
                        }>rightContentRender</div>)
                    }}
                >
                    <AppContainer activeKey={activeKey}/>
                </ProLayout>
            </div>
    )
}

export default Main;
