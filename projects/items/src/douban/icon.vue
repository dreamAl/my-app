<template>
  <div>
    <sqcen></sqcen>
    <div class="diva">
      <consp  v-for="(v, i) in arri" :key="i" :titurl="v.url" :tita="v.name" 
      :titb="v.des" :titd="v.color"></consp>
    </div>
    <div class="divf">
        <router-link to="/reg">注册账号</router-link>
        <router-link to="/login">登录豆瓣</router-link>
    </div> 
    <div class="divf divft">
        <a href="#">使用桌面版</a>
        <a href="#">使用豆瓣APP</a>
    </div>    
  </div>
</template>
<script>
import sqcen from '../components/sq/sqcen'
import consp from '../components/sq/consp'
export default {
  components:{
    sqcen,
    consp
  },
  data(){
        return{
            arri:[]
        }
    },
  created(){
        this.axios({
            mothod:"get",
            url:"/searchClass"
        }).then((data)=>{
            console.log(data.data)
            this.arri=data.data
            })
    }
  
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.diva{
  margin-left: 0.3rem;
  font-size: 0;
}
.divf{
  font-size: 0;
  padding:0.15rem 0.15rem;
  border-top:0.01rem solid #f3f3f3;
  border-bottom:0.01rem solid #f3f3f3;
}
.divf>a{
  display: inline-block;
  font-size: 0.16rem;
  color:#42bd56;
  text-align: center;
  border-right:0.01rem solid #f3f3f3;
}
.divf>a:nth-of-type(1){
  width: 50%;
}
.divf>a:nth-of-type(2){
  margin-left: 0.27rem;
}
.divft{
  border-top:none;
}
</style>
