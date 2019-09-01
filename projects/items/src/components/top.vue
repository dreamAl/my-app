<template>
  <div style="font-size:0px">
   <router-link to="/index">豆瓣</router-link>
   <router-link to="/move">电影</router-link>
   <router-link to="/book">图书</router-link>
   <router-link to="/bc">广播</router-link>
   <router-link to="/team">小组</router-link>
   <router-link to="/icon"><img src="../../static/img/01.png" ></router-link>
  </div>
</template>
<script>
export default {
 
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
  width: 100%;
  height:0.6rem;
  position: fixed;;
  right:0;
  left:0;
  top:0;
  background:white;
  border-bottom:#ccc 0.01rem solid ;  
}
 div>a:nth-of-type(1){
   font-size: 0.3rem;
   font-weight: 700;
   color:#00b600;
   margin-left: 0.2rem;
   display:inline-block;
   margin-top:0.1rem;
 }
 div>a:nth-of-type(2){
   font-size: 0.15rem;
   color:rgb(35, 132, 232);
   margin-left: 0.4rem;
 }
 div>a:nth-of-type(3){
   font-size: 0.16rem;
   color:rgb(159, 120, 96);
   margin-left: 0.1rem;
 }
 div>a:nth-of-type(4){
   font-size: 0.16rem;
   color:rgb(228, 168, 19);
   margin-left: 0.1rem;
 }
 div>a:nth-of-type(5){
   font-size: 0.16rem;
   color:rgb(42, 184, 204);
   margin-left: 0.1rem;
 }
 div>a:nth-of-type(6){
   margin-left: 0.1rem;
 }
 a>img{
    width:0.25rem;
   height:0.2rem;
   vertical-align: middle;
 }
</style>
