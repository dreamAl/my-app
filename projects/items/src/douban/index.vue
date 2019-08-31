<template>
  <div>
     <!-- <p @click="fun()"></p> -->
     <top></top>
     <cent></cent>
     <tit></tit>
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
       tit
    },
    methods:{
        fun(){
            this.axios({
                method:"/get",
                url:"http://localhost:4000/index"
            }).then((ok)=>{
                console.log(ok)
            })
        }
    }
  
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
