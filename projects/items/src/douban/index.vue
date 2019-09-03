<template>
  <div>
     <p>{{text}}</p>
     <top></top>
     <cent></cent>
     <div>
        <tit ></tit>
     </div> 
    <foot></foot>
  </div>
</template>
<script>
import top from '../components/top'
import cent from '../components/cent'
import tit from '../components/tit'
import foot from '../components/foot'
export default {
    components:{
       top ,
       cent,
       tit,
    foot
    },
    data(){
        return{
            text:""
        }
    },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
    font-size:0.18rem;
    color:red;
}
</style>
