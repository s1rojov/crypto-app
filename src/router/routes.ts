export const routers = [
    {
        path: '/login',
        name: 'Login',
        component:()=>import('@/views/auth/index.vue')
      },
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