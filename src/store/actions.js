import * as actionTypes from "./mutation_types";
export default {
    [actionTypes.ADD_BTN]:function({commit,state},key,value){
        if(state.curIndex <=state.itemDetail.length-2){
            commit(actionTypes.ADD_INDEX,key,value)
        }
        commit(actionTypes.ADD_ANSWER)
    }
} 