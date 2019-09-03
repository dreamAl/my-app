<template>
  <div>
   <top></top>
   <div style="margin-top:0.7rem">
      <movef titname="最受关注图书 | 虚构类" :fuprops="arra"></movef>
   </div>
  </div>
</template>
<script>
import top from '../components/top'
import movef from '../components/movef'
export default {
 components:{
       top,
       movef
    },
    data(){
      return{
        arra:[]
      }      
    },
    created(){
      this.axios({
        method:"get",
        url:"/book"
      }).then((data)=>{
        console.log(data)
        // this.arra=
      })
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
