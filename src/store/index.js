import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
    //TODO: 初始状态
    count: 0,
    steps: []
}
const mutations = {
    INCREMENT(state, amount){
        state.steps.push("加上" + amount)
        state.count = state.count + amount
    },
    REDUCE(state, amount){
        state.steps.push("减去" + amount)
        state.count -= amount
    }
}

export default new Vuex.Store({
    state,
    mutations
})