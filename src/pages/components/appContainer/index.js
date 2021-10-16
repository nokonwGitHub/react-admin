import {lazy, Suspense, useEffect, useState} from "react";
import {PageContainer} from "@ant-design/pro-layout"
import {allItems} from "@/pages/Main/menu";

const UserAdmin = lazy(() => import("@/views/userAdmin"));
const UserAdmin2 = lazy(() => import("@/views/userAdmin2"));

const allComp = {
    "客户/1": (
        <Suspense fallback={<div>loading</div>}>
            <UserAdmin/>
        </Suspense>),
    "客户/2": (
        <Suspense fallback={<div>loading</div>}>
            <UserAdmin2/>
        </Suspense>)
}

const AppContainer = (props) => {
    const [tabActiveKey, settTabActiveKey] = useState("");

    useEffect(() => {
        settTabActiveKey(allItems[props.activeKey]?.[0]?.key || "")
    }, [props.activeKey])

    return (
        <PageContainer fixedHeader
                       header={{title: ''}}
                       tabList={allItems[props.activeKey] || []}
                       onTabChange={settTabActiveKey}
                       tabActiveKey={tabActiveKey}
        >
            <div
                style={{
                    minHeight: "calc(100vh - 50px)",
                }}>
                {allComp[tabActiveKey] || "ssss"}
            </div>
        </PageContainer>
    )
}

export default AppContainer;

