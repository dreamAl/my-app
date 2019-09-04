<template>
  <div style="font-size:0px">
   <router-link to="/move">影院热映</router-link>
   <router-link to="/bc">欧美新碟帮</router-link>
   <router-link to="/reg">注册账号</router-link>
   <router-link to="/login">登录豆瓣</router-link>
  </div>
</template>
<script>
export default {
  
}  
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
    width: 85%;
    margin:0.8rem 7% 7%;
    font-size: 0;
    text-align: center;
}
div>a{
    display: inline-block;
    width: 50%;
    height:0.53rem;
    background: #F6F6F6;
    color:#494949;
    font-size: 0.15rem;
    line-height: 0.53rem;
    border:0.03rem solid white;
    box-sizing: border-box;
}
</style>
