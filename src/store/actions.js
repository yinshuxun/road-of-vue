export const incrementCounter = function ({dispatch, state}, value) {
    dispatch('INCREMENT', value)
}

export const reduceCounter = function ({dispatch, state}, value) {
    dispatch('REDUCE', value)
}

export const getCount = (state) => {
    return state.count
}