import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
    //TODO: 初始状态
    count: 0,
    steps: []
}

const getters = {
    count(state){
        return state.count
    },
    steps(state){
        return state.steps
    }
}

export default new Vuex.Store({
    state,
    mutations: {
        increment(state, num){
            state.count += num
            state.steps.unshift('加上' + num)
        },
        reduce(state, num){
            state.count -= num
            state.steps.unshift('减去' + num)
        }
    },
    actions: {
        increment({commit}, num){
            commit('increment', num)
        },
        reduce({commit}, num){
            commit('reduce', num)
        }
    },
    getters
})