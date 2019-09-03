<template>
  <div>
   <top></top>
   <banner></banner>
   <log></log>
   <gb></gb>
   <gb></gb>
   <gb></gb>
   <gb></gb>
   <gb></gb>
   <div class="gba">
     <a href="#">显示更多广播</a>
   </div>
   <foot></foot>
  </div>
</template>
<script>
import top from '../components/top'
import banner from '../components/banner'
import log from '../components/logined/log'
import gb from '../components/logined/gb'
import foot from '../components/foot'
export default {
 components:{
       top ,
       banner,
       log,
       gb,
       foot
    },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .gba{
    text-align: center;
    font-size: 0;
    padding:0.5rem;
  }
  .gba>a{
    display: inline-block;
    font-size: 0.14rem;
    color:#42bd56;
  }
</style>
