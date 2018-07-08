export const state = () => ({
    tasks: [
        {
            id: '1',
            msg: 'Design some buttons',
            rop: 20,
            cls: 'progress-bar-aqua'
        },
        {
            id:'2',
            rop: 40,
            cls:'progress-bar-green',
            msg:'Create a nice theme'
        },
        {
            id:'3',
            cls:'progress-bar-red',
            rop: 60,
            msg:'Some task I need to do'
        },
        {
            id:'4',
            rop: 80,
            cls:'progress-bar-yellow',
            msg:'Make beautiful transitions'
        }
    ]
})

export const getters = {
    allTasks (state) {
        return state.tasks
    }
}