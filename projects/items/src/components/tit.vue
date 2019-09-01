<template>
<div>
<router-link to="/cont">
    <div class="box">
      <div class="left">
        <h3>奇妙的不确定性 Intriguing Uncertainties</h3>
        <p>展览“奇妙的不确定性”旨在强调当代艺术中某些特定叙事的重要性</p>
      </div>   
        <img src="../../static/img/1.jpg" alt="">
        <span>展览</span>
    </div>
</router-link>   
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
    width: 1.8rem;
   float:left;
   margin-left: 0.3rem;
}
.left>h3{
    font-size: 0.15rem;
    color:#494949;
    font-weight: 100;
}
.left>p{
    margin-top:0.1rem;
    font-size: 0.11rem;
    color:#AAAAAA;
}

img{
    float:right;
    width:0.65rem;
    height:0.8rem;
    margin-right: 0.2rem;
}
span{
    font-size: 0.12rem;
    color:#ccc;
    margin-left: -1.8rem;
}
</style>
