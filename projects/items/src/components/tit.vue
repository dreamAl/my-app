<template>
  <div class="box">
      <div class="left">
        <h1>我是标题</h1>
        <p>我是内容</p>
      </div>   
        <img src="../../static/img/1.jpg" alt="">
        <span>展览</span>
  </div>
</template>
<script>
export default {
 
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
    width: 100%;
    height:30%;
    border-bottom:0.01rem solid #ccc;
}
.left{
   float:left;
   margin-left: 0.3rem;
}
.left>h1{
    font-size: 0.17rem;
}
.left>p{
    font-size: 0.12rem;
}

img{
    float:right;
    width:25%;
    height:1rem;
    margin-right: 0.4rem;
}
span{
    font-size: 0.12rem;
    color:#ccc;
    margin-left: -0.7rem;
}
</style>
