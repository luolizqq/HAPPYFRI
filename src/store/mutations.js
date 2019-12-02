import * as actionTypes from "./mutation_types";
export default {
    [actionTypes.ADD_ANSWER]:function(state,key,value){
        state.answerIds[key] =value;
    },
    [actionTypes.ADD_INDEX]:function(state,key,value){
        state.curIndex++;
    },
    [actionTypes.RESET_DATA]:function(state){
        state.curIndex =0;
        state.answerIds={}
    }
}