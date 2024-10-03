export const routers = [
    {
        path: '/',
        name: 'Main layout',
        component:()=> import('@/layout/index.vue'),
        redirect: '/dashboard',
        children:[
            {
                path: 'dashboard',
                name: 'Dashboard',
                component:()=> import('@/views/dashboard/index.vue')
            },
            {
                path: 'crypto',
                name: 'Crypto adding',
                component:()=> import('@/views/crypto/index.vue')
            }
        ]
    }
]