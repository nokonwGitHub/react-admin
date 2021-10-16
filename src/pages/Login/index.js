import {LoginForm, ProFormText, ProFormCheckbox} from '@ant-design/pro-form';
import {Modal} from "antd";
import {useEffect, useState} from "react";

const Login = (props) => {
    const [showMode, setShowMode] = useState(false);

    useEffect(() => {
        localStorage.getItem("login") === "1" && setShowMode(true);
    }, []);

    return (
        <div style={{backgroundColor: 'white', width: "100%", height: "100vh"}}>
            <LoginForm
                submitter={{
                    render: (formProps, dooms) => {
                        return [
                            dooms[1],
                        ];
                    },
                }}
                onFinish={async (values) => {
                    localStorage.setItem("login", "1");
                    props.history.replace({
                        pathname: "/main"
                    });
                    return true;
                }}
            >
                <>
                    <ProFormText
                        name="username"
                        fieldProps={{
                            size: 'large',
                            // prefix: <UserOutlined className={'prefixIcon'} />,
                        }}
                        placeholder={'用户名'}
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名!',
                            },
                        ]}
                    />
                    <ProFormText.Password
                        name="password"
                        fieldProps={{
                            size: 'large',
                            // prefix: <LockOutlined className={'prefixIcon'} />,
                        }}
                        placeholder={'密码'}
                        rules={[
                            {
                                required: true,
                                message: '请输入密码！',
                            },
                        ]}
                    />
                </>
                <div
                    style={{
                        marginBottom: 24,
                    }}
                >
                    <ProFormCheckbox
                        name="autoLogin"
                    >
                        自动登录
                    </ProFormCheckbox>
                </div>
            </LoginForm>

            <Modal
                title="提示"
                visible={showMode}
                onOk={async () => {
                    await props.history.replace({
                        pathname: "/main"
                    })
                    await setShowMode(false);
                }}
                onCancel={() => {
                    setShowMode(false)
                }}

                okText="确认"
                cancelText="取消"
            >
                是否登录
            </Modal>
        </div>
    );
}

export default Login
