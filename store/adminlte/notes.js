export const state = () => ({
    notes: [
        {
            img:'/comp/adminlte/img/user2-160x160.jpg',
            role:'Support Team',
            time:' 5 mins',
            msg:'Why not buy a new awesome theme?'
        },
        {
            img:'/comp/adminlte/img/user3-128x128.jpg',
            role:'AdminLTE Design Team',
            time:' 2 hours',
            msg:'Why not buy a new awesome theme?'
        },
        {
            img:'/comp/adminlte/img/user4-128x128.jpg',
            role:'Developers',
            time:' Today',
            msg:'Why not buy a new awesome theme?'
        },
        {
            img:'/comp/adminlte/img/user3-128x128.jpg',
            role:'Sales Department',
            time:' Yesterday',
            msg:'Why not buy a new awesome theme?'
        },
        {
            img:'/comp/adminlte/img/user4-128x128.jpg',
            role:'Reviewers',
            time:' 2 days',
            msg:'Why not buy a new awesome theme?'
        }
    ]
})

export const getters = {
    allNotes (state) {
        return state.notes
    }
}