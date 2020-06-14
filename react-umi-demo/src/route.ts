
export default [
    {
        path: '/user',
        layout: false,
        routes: [
            {
                name: 'login',
                path: '/user/login',
                component: './user/login',
            },
        ],
    },

   
    {
        path: '/container',
        layout: false,
        title: "menu",
        name: 'menu',
        icon: 'smile',
        component: './Test/test',
        
        routes: [
            {
                path:'/container',
                redirect: '/container/welcome'
            },
            {
                path: '/container/welcome',
                name: 'welcome',
                icon: 'smile',
                component: './Welcome',
            },
            {
                path: '/container/admin',
                name: 'admin',
                icon: 'crown',
                access: 'canAdmin',
                component: './Admin',
                routes: [
                    {
                        path: '/container/admin/sub-page',
                        name: 'sub-page',
                        icon: 'smile',
                        component: './Welcome',
                        routes: [
                            {
                                name: 'list.table-list',
                                icon: 'table',
                                path: '/container/admin/sub-page/list',
                                component: './ListTableList',
                            },
                            {
                                name: 'list.table-list',
                                icon: 'table',
                                path: '/container/admin/sub-page/list1',
                                component: './ListTableList',
                            },
                            
                        ]
                    },
                    {
                        path: '/container/admin/sub-page1',
                        name: 'sub-page',
                        icon: 'smile',
                        component: './Welcome',
                        routes: [
                            {
                                name: 'list.table-list',
                                icon: 'table',
                                path: '/container/admin/sub-page1/list',
                                component: './ListTableList',
                            },
                            {
                                name: 'list.table-list',
                                icon: 'table',
                                path: '/container/admin/sub-page1/list1',
                                component: './ListTableList',
                            },
                            
                        ]
                    },
                ],
            },
            {
                name: 'list.table-list',
                icon: 'table',
                path: '/container/list',
                component: './ListTableList',
                routes: [
                    {
                        name: 'list.table-list',
                        icon: 'table',
                        path: '/container/list/a',
                        component: './ListTableList',
                        routes: [
                            {
                                name: 'list.table-list',
                                icon: 'table',
                                path: '/container/list/a/1',
                                component: './ListTableList',
                                routes: [
                                    
                                ]
                            }
                        ]
                    },
                    {
                        name: 'list.table-list',
                        icon: 'table',
                        path: '/container/list/b',
                        component: './ListTableList',
                    },
                ]
            },
           
            {
                component: './404',
            },
        ]
    },
    
    {
        component: './404',
    },
    
]