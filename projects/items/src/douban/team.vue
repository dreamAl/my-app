<template>
  <div>
   <top></top>
   <div class="logbox">
      <log><router-link to="/login">  </router-link></log>
   </div>
   <div>
     <fugroup></fugroup>
   </div>
  </div>
</template>
<script>
import top from '../components/top'
import log from '../components/logined/log'
import fugroup from '../components/xiaozu/fugroup'
export default {
 components:{
       top ,
       log,
       fugroup
    },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logbox{
    margin-top:-0.6rem;
  }
</style>
