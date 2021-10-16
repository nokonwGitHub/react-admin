// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        path: '/首页',
        name: '首页',

    },
    {
        path: '/客户',
        name: '客户',
        tabs: [
            {key: "1", tab: "1号客户"},
            {key: "4", tab: "2号客户"},
            {key: "5", tab: "3号客户"},
        ]
    },

    {
        path: '/财务',
        name: '财务',
        tabs: [
            {key: "1", tab: "1号财务"},
            {key: "4", tab: "2号财务"},
            {key: "5", tab: "3号财务"},
        ]
    },
]


export const allItems = {
    "/客户": [
        {key: "客户/1", tab: "1号客户"},
        {key: "客户/2", tab: "2号客户"},
        {key: "客户/3", tab: "3号客户"},
    ],
    "/财务": [
        {key: "9", tab: "1号财务"},
        {key: "4", tab: "2号财务"},
        {key: "5", tab: "3号财务"},
        {key: "8", tab: "3号财务"},
    ]
}
