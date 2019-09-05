<template>
  <div>
   <top></top>
   <div class="logbox">
     <log></log>
     <!-- <router-link to="/login">  </router-link> -->   
   </div>
   <img src="../../static/img/green.gif" v-if="obj.length<=0" class="whites"> 
   <div v-else>
   <div >  
     <fugroup futit="租房找室友"  fuoot="更多相关小组" :teamp="obj"></fugroup>
     <fugroup futit="来聊五块钱" fuoot="来聊五块钱" :teamp="obja"></fugroup>
     <fugroup futit="买买买" fuoot="更多相关小组" :teamp="objb"></fugroup>
   </div>
   <div>
     <foot></foot>
   </div>
   </div>
  </div>
</template>  
<script>
import top from '../components/top'
import log from '../components/logined/log'
import fugroup from '../components/xiaozu/fugroup'
import foot from '../components/foot'
export default {
 components:{
       top ,
       log,
       fugroup,
       foot
    },
    data(){
        return{
            obj:[],
            obja:[],
            objb:[]
            
        }
    },
      created(){
        setTimeout(()=>{
           this.axios({
            method:"get",
            url:"/xiaozua"
        }).then((ok)=>{
            this.obj=ok.data.xiaozua
            });

            this.axios({
            method:"get",
            url:"/xiaozub"
        }).then((ok)=>{
            this.obja=ok.data.xiaozub
            });

             this.axios({
            method:"get",
            url:"/xiaozuc"
        }).then((ok)=>{
            this.objb=ok.data.xiaozuc
            });
        },2000)
    }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logbox{
    margin-top:-0.6rem;
  }
</style>
