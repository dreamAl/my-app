<template>
  <div>
     <p>{{text}}</p>
     <top></top>
     <cent></cent>
     <div>
        <tit ></tit>
     </div> 
  </div>
</template>
<script>
import top from '../components/top'
import cent from '../components/cent'
import tit from '../components/tit'
export default {
    components:{
       top ,
       cent,
       tit,
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
