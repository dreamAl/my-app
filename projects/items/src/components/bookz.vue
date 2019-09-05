<template>
  <div style="width:90%;height:1.8rem;">
    <div class="fuBox"  >
        <span>豆瓣纸书</span>
        <a href="#">更多</a>
    </div>
    <div style="width:100%; margin:0 auto">
       <img src="../../static/img/book.jpg" alt="">
       <div class="bookp">
            <p>
                <b>造物</b><b>￥68</b>
            </p>
            <span class="spanr">改变世界的万物图典，3000幅图里的发明与冒险</span>
       </div>       
    </div>
  </div>
</template>   
<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fuBox{ 
    width: 90%;  
    margin: 0.15rem auto ;    
    display: flex;
    justify-content: space-between;
}
.fuBox>span{
    font-size: 0.15rem;
    color:#111111;
}
.fuBox>a{
    font-size: 0.13rem;
    color:#42bd56;
}
.bookp{
    font-size:0 ;
}
img{
    float: left;
    width: 1.2rem;
    height:1.6rem;
    margin: 0 0.15rem;
}
p{
    margin-bottom:0.2rem;
}
p>b{
    font-weight: 100;
}
p>b:nth-of-type(1){
   font-size:0.2rem;
   color:#494949;
}
p>b:nth-of-type(2){
   font-size:0.16rem;
   color:#e76648;
   float: right;
}
.spanr{
    font-size: 0.12rem;
    color:#9b9b9b;
}
</style>
