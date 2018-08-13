const user = {
  state: {
    isLogin: 0
  },
  mutations: {
    CHANGE_LOGIN_STATE: (state, data) => {
      state.isLogin = data;
    }
  }
};

export default user;
