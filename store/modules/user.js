import { TOGGLE_DRAWER, SET_DRAWER, TOGGLE_SIGNIN, TOGGLE_SIGNUP } from '../mutation-type'
const state = {
  drawer: false,
  siginVisible: false,
  signUpVisible: false
}

const getters = {

}
const mutations = {
  [SET_DRAWER]: (state, payload) => (state.drawer = payload),
  [TOGGLE_DRAWER]: state => (state.drawer = !state.drawer),
  [TOGGLE_SIGNIN]: state => (state.siginVisible = !state.siginVisible),
  [TOGGLE_SIGNUP]: state => (state.signUpVisible = !state.signUpVisible),
}

const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
