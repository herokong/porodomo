import Vue from 'vue'


const state = {
  Timer: {
    running: false,
  },
  minutes: 0,
}

const mutations = {
  changeState(state) {
    state.Timer.running = !state.Timer.running
  },
  addMinutes(state, time) {
    state.minutes = time
  }
}

const actions = {
  changeStatus({commit}) {
    commit('changeState')
  },
  addMinutes({commit}, time) {
    commit('addMinutes', time)
  }
}

const getters = {
  getStatus() {
    return state.Timer.running
  },
  getMinutes() {
    return state.minutes
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}