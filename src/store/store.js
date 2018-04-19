import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import defaultState from "./state/state"
import mutations from "./mutations/mutations"
import getters from "./getters/getters"
import actions from "./actions/actions"
export default () => {
    const store = new Vuex.Store({
        strict: true,//如果在其他地方修改state， 则会报错
        state: defaultState,
        mutations,
        getters,
        actions,
        // modules:{
        //     a:{
        //         namespaced: true,//单独模块
        //         state:{
        //             text:1
        //         },
        //         mutations:{
        //             updateText(state,num){
        //                 console.log(state.text)
        //                 state.text = num;
        //             }
        //         },
        //         getters:{
        //             textPlus(state,getters,rootState) {//rootState为全局的state rootstate.state.b.text
        //                 return state.text + 1;
        //             }
        //         },
        //         actions: {
        //             add({state,commit,rootState}){//{root:true}此参数表面去全局模式下寻找updateText
        //                 // commit("updateText", rootState.count)
        //                 commit("updateCount", '56326',{root:true})
        //             }
        //         }
        //     },
        //     b: {
        //         state: {
        //             text: 2
        //         }
        //     }
        // }
        })
        if (module.hot) {
            module.hot.accept([
              './state/state',
              './mutations/mutations',
              './actions/actions',
              './getters/getters'
            ], () => {
              const newState = require('./state/state').default
              const newMutations = require('./mutations/mutations').default
              const newActions = require('./actions/actions').default
              const newGetters = require('./getters/getters').default
              store.hotUpdate({
                state: newState,
                mutations: newMutations,
                getters: newGetters,
                actions: newActions
              })
            })
          }
        return store;
}
