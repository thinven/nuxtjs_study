export const state = () => ({
    notifications: [
        {
            id:'1',
            cls:'fa-users text-aqua',
            msg:' 5 new members joined today.'
        },
        {
            id:'2',
            cls:'fa-warning text-yellow',
            msg:' Very long description here that may not fit into the page and may cause design problems'
        },
        {
            id:'3',
            cls:'fa-users text-red',
            msg:' 5 new members joined'
        },
        {
            id:'4',
            cls:'fa-shopping-cart text-green',
            msg:' 25 sales made'
        },
        {
            id:'5',
            cls:'fa-user text-red',
            msg:'You changed your username'
        }
    ]
})

export const getters = {
    allNotifications (state) {
        return state.notifications
    }
}