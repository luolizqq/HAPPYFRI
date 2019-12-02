<!--  -->
<template>
<div class='wrapper'>
    <div class="title">
        <div  v-if='page ==="home"' class="txt">第一周</div>
        <div v-else class="txt">
            {{curItem.topic_name}}
        </div>
    </div>
    <div class="content">
        <img  v-if='page ==="home"' src="../assets/1-2.png" alt="">
        <div v-else class="question">
            <div class="question_title"> {{curItem.topic_name}}</div>
                <div class="answer_item" 
                v-for='(item,index)  in curItem.topic_answer'
                @click="choose(item,index)"
                :key="item.topic_answer_id"
                ><span class="answer" :class='{active:currentChoice===index}'>{{answer[index]}}</span> {{item.answer_name}}</div>
        </div>
    </div>
    <div class='btn'>
        <div v-if = 'page ==="home"' class="start" @click="addBtn"></div>
        <div v-else-if='curIndex ===itemDetail.length-2'  class="submit"></div>
        <div v-else class="next"></div>
        
    </div>
</div>
</template>

<script>
import {mapState,mapMutations,mapActions,mapGetters} from "vuex";
export default {
components: {},
data() {
return {
answer:["A","B","C","D"],
currentChoice:1
};
},
computed:{
    ...mapState(['answerIds','curIndex','itemDetail']),
    ...mapGetters(['curItem'])
},
watch: {},
methods: {
    ...mapMutations({addAnswer:'ADD_ANSWER',resetData:'RESET_DATA',addIndex:"ADD_INDEX"}),
    ...mapActions({addBtn:'ADD_BTN'}),
    choose(item,index){
        this.currentChoice = index;
        this.addBtn(index,item.topic_answer_id)
    }
},
props:['page'],
created() {

},
mounted() {

},
}
</script>
<style lang='less' scoped>
.wrapper{
    width:100%;
    height:100%;
    background: url('../assets/1-1.jpg');
    background-size: 100% 100%;
    .title{
        position: absolute;
        width:3.25rem;
        height:7.35rem;
        top:-0.5rem;
        right:1.6rem;
        background:url('../assets/hh.png');
        background-size: 100% 100%;
        .txt{
            position: absolute;
            bottom:1rem;
            width:100%;
            z-index:100;
        }
    }
    .content{
        position: relative;
        img{
            width:13.15rem;
            position: absolute;
            top:3.5rem;
            left:0
        }
        .question{
            position: absolute;
            width:14rem;
            height:10rem;
            top:7rem;
            left:50%;
            margin-left:-7rem;
            color:orange;
            .answer_item{
                line-height: 1.5rem;
                .answer{
                    display: inline-block;
                    border:1px solid #fff;
                    border-radius:50%;
                    width:1rem;
                    height:1rem;
                    line-height: 1rem;
                    text-align: center;
                }
                .active{
                    background:#fff;
                }
            }
        }
    }
    .btn{
        width:4.35rem;
        height:2.1rem;
        position: absolute;
        bottom:6rem;
        left:50%;
        margin-left:-2.175rem;
        .start,.next,.submit{
            width:100%;
            height:100%;
            background-size:100% 100%; 
        }
        .start{
            background-image: url("../assets/1-4.png");
        }
        .next{
            background-image: url("../assets/2-2.png")
        }
        .submit{
            background-image: url("../assets/3-1.png")
        }
    }
}
</style>