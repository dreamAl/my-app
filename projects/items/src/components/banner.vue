<template>
 <div  class="bannera">    
    <img src="../../static/img/banner.jpg" alt="">
    <p>每天看点好内容</p>
    <a href="#">极速下载</a>
    <a href="#">打开</a>
 </div>
</template>
<script>
export default {
  
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bannera{
    width: 100%;
    position: absolute;
    top:0.6rem;
    font-size: 0px;
    overflow: hidden;
}
.bannera>img{
   max-width: 100%;   
}
p{
    font-size: 0.12rem;
    color:#2ca532;
    position: relative;
    top:-0.43rem;
    left:0.35rem;
}
div>a{
    font-size: 0.12rem;
    display: inline-block;
    position: relative;
    top:-0.6rem;
    left:2rem;
    font-weight: 700;
    text-align: center;
    border-radius: 0.03rem;
}
a:nth-of-type(1){
    width: 0.7rem;
    line-height:2;
    font-weight: 700;
    background:#42bd56;
    color:white;    
}
a:nth-of-type(2){
    width: 0.4rem;
    line-height: 2;
    border:0.01rem solid #42bd56;
    color:#42bd56;   
    margin-left: 0.05rem;
}
</style>
