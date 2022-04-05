import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state() {
        return {
            poolList: []
        }
    },
    getters: {
        pools: state => state.poolList
    },
    mutations: {
        set_pool(state, payload) {
            state.poolList = payload
        }
    },
    actions: {
        async getPool({commit}) {
            try {
                const res = await this.axios.get('poolpairs')
                commit('set_pool', res.data)
            } catch (e) {

            }
        },
        async getPrice({commit},token) {
            try {
                const res = await this.axios.get('prices/'+token+'-USD')
                return res.data
            } catch (e) {

            }
        }
    },
    modules: {}
})

export default store
