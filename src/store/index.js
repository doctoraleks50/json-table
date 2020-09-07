import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const cookie = require('js-cookie');

export default new Vuex.Store({
    namespaced: true,
    strict: true,
    state: {
        members: [],
    },
    actions: {
        async fetchMembers({ commit }) {
            const data = await cookie.get('members');
            const members = Array.from(JSON.parse(data).members);
            commit('setMembers', members);
        }
    },
    getters: {
        getPerPageMembers( state )  {
            return (page, perPage) => {
                const start = (page - 1) * perPage;
                const end = page * perPage;
                return state.members.slice(start, end)
            }
        }
    },
    mutations: {
        setMembers(state, members) {
            state.members = members;
        },
        sortByColumn(state, columnName) {
            if(columnName === 'id') {
                return state.members.sort((a, b) => a[columnName] - b[columnName] )
            }
            state.members.sort((a, b) => a[columnName] > b[columnName] ? 1 : -1)
        }
    }
})