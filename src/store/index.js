import Vue from "vue";
import Vuex from "vuex";
import { login } from "@/api/user";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isTestApi: true, //Do the website use mock api
    name: "",
    dep: "",
  },
  mutations: {
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_DEP: (state, dep) => {
      state.dep = dep;
    },
  },
  actions: {
    login({ commit }, userInfo) {
      const { userName, passWord } = userInfo;
      return new Promise((resolve, reject) => {
        login(
          { userName: userName.trim(), passWord: passWord },
          this.getters.common_isTestApi
        )
          .then((response) => {
            if (response.status === "OK" && response.data.status == "Pass") {
              const { data } = response;
              commit("SET_NAME", data.userInfo.userName);
              commit("SET_DEP", data.userInfo.userDeptID);

              resolve();
            } else {
              reject(response.data.errorMsg);
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  modules: {},
  getters: {
    isTestApi: (state) => state.isTestApi,
    name: (state) => state.name,
    dep: (state) => state.dep,
  },
});
