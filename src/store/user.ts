export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "yuOOJ",
    },
  }),
  actions: {
    getLoginUser({ commit, state }: { commit: any; state: any }, payload: any) {
      //todo 需要改完远程登录
      commit("updateUser", { userName: "未登录" });
    },
  },
  mutations: {
    updateUser(state: any, payload: any) {
      state.loginUser = payload;
    },
  },
};
