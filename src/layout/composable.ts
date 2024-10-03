export function useLayoutFn() {
    const sidebarItems = [
        {
            name: 'Dashboard',
            path: '/dashboard',
            icon: 'dashboard'
        },
        {
            name: 'Crypto',
            path: '/crypto',
            icon: 'crypto'
        }
    ];

    return {
        sidebarItems
    };
}
