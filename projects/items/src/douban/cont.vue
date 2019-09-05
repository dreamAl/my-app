<template>
  <div>
   <top></top>
   <banner></banner>
   <clear :arr="arrfu"></clear>
   <foot></foot>
  </div>
</template>
<script>
import top from '../components/top'
import banner from '../components/banner'
import clear from '../components/clear'
import foot from '../components/foot'
export default {
 components:{
       top ,
       banner,
       clear,
       foot
    },   
    data(){ 
    return{
      arrfu:[]
    }
  },
    created(){
      this.arrfu=this.$route.query.arr;
      // console.log( this.arrfu)
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
