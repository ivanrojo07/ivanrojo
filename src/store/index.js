import { createStore } from "vuex";

export default createStore({
    state:{
        page:"Home",
    },
    mutations:{
        changePage(state,page){
            state.page = page
        }
    },
    actions:{},
    modules:{}
})