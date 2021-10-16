import React, {useEffect} from 'react';
import ProTable from '@ant-design/pro-table';
import request from 'umi-request';

const columns = [
    {
        title: '标题',
        dataIndex: 'title',
        copyable: true,
        ellipsis: true,
        search: false
    },
    {
        title: '状态',
        dataIndex: 'state',
        filters: true,
        search: false
    },
    {
        title: '标签',
        dataIndex: 'labels',
        search: false,
    },
    {
        title: '创建时间',
        key: 'showTime',
        dataIndex: 'created_at',
        search: false,
    },
    {
        title: '操作',
        valueType: 'option',
        render: (text, record, _, action) => [
            <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
                查看
            </a>,
        ],
    },
];


const UserAdmin = () => {
    useEffect(() => {
        console.log("create")
        return () => {
            console.log("destroy")
        }
    });

    return (
        <ProTable
            columns={columns}
            request={async (params = {}) => {
                const data = await request.get("https://proapi.azurewebsites.net/github/issues", {
                    params
                });
                console.log(data)
                return data;
            }}
            editable={{
                type: 'multiple',
            }}
            columnsState={{
                persistenceKey: 'pro-table-singe-demos',
                persistenceType: 'localStorage',
            }}
            rowKey="id"
            search={{
                labelWidth: 'auto',
                filterType: "query",
                collapsed: false
            }}
            form={{
                // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
                initialValues: {}
            }}
            pagination={{
                pageSize: 20,
            }}
            dateFormatter="string"

            debounceTime={100}

            options={false}
        />
    );
};

export default UserAdmin;
