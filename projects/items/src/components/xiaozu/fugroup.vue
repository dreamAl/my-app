<template>
    <div class="minb">
        <p>{{futit}}</p>    
    <div class="box" v-for="(v, i) in teamp" :key="i">
       <zigroup :imgurl="v.images.small" :booktit="v.title"
        :bookper="v.group_member" :time="v.group_topic.time" :bookcont="v.group_topic.title"></zigroup>
    </div>
    <div class="boxh">
        <a href="#">{{fuoot}}</a>
    </div>
   </div>
</template>
<script>
import zigroup from './zigroup'
export default {
    components:{
        zigroup
    },
    props:{
        futit:{
            type:String,
            require:true
        },
        fuoot:{
            type:String,
            require:true
        },
        teamp:{
        type:Array,
        required:true
      }
    },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.minb{
    width:100%;
     padding:0.3rem 0;
}
 p{
     width: 90%;
     margin:0 auto 0.1rem;
     font-size: .15rem;
     color:#111111;
 }
 .boxh{
     text-align: center;
     font-size: 0;
    margin:0.1rem 0 0.3rem;
    }
 .boxh>a{
     display: inline-block;
     font-size: 0.14rem;
     color:#42bd56;
 }
</style>
