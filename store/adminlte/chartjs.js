export const state = () => ({
    chartjsdata1: [65, 59, 80, 81, 56, 55, 22],
    chartjsdata2: [28, 48, 40, 19, 86, 27, 90]
})

export const getters = {
    allData1 (state) {
        return state.chartjsdata1
    },
    allData2 (state) {
        return state.chartjsdata2
    }
}