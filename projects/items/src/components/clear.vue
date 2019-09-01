<template>
  <div class="cleara">      
      <h2>奇妙的不确定性 Intriguing Uncertainties</h2>
      <span  class="spa">北京</span>
      <img src="../../static/img/08.jpg" alt="">
      <div class="divb">
        <span >时间：&nbsp;&nbsp;</span>
        <ul class="ula">
          <li>2019-06-06 10:00:00</li>
          <li>2019-10-21 19:00:00</li>
        </ul>    
      </div> 
      <div class="divb">
        <span >地点：&nbsp;&nbsp;</span>
        <ul class="ula">
          <li>北京 朝阳区 朝外大街 侨福芳草地D座10层 侨福当代美术馆</li>
        </ul>    
      </div>  
      <div class="divb">
        <span >费用:  &nbsp;&nbsp;</span>
        <ul class="ula">
          <li>免费</li>
        </ul>    
      </div>  
      <div class="divb">
        <span >类型:  &nbsp;&nbsp;</span>
        <ul class="ula">
          <li>展览</li>
        </ul>    
      </div>  
      <div class="divb">
        <span >起始时间: &nbsp;&nbsp;</span>
        <ul class="ula">
          <li>侨福当代美术馆</li>
        </ul>    
      </div>       
  </div>
</template>
<script>

export default {
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cleara{
    font-size: 0rem;
    margin: 1.7rem 0 0 0.1rem;
    width: 3.5rem;

}
h2{
    font-size:0.15rem;
    color:#494949;
}
.spa{
    font-size:0.12rem;
    display: inline-block;
    width: 0.4rem;
    text-align: center;
    background:#ff8263;
    color:white;
    font-weight: 700;
    border-radius: 0.03%;
}
img{
    display: block;
    width:2rem ;
    margin:0.3rem 0.5rem;
}
.divb{
    margin-top: 0.1rem;
    width: 3rem;
    display: flex;
}
.divb>span{
    font-size: 0.12rem;
    color:#666666;
    width: 0.55rem;
}
.ula{
    font-size: 0.12rem;   
}
</style>
