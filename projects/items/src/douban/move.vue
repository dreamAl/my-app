<template>
  <div>
   <top></top>
   <movef :fuprops="arr"></movef>

   <!-- <movef :fuprops="arra"></movef>
   <movef :fuprops="arrb"></movef>
   <movef :fuprops="arrc"></movef>
   <movef :fuprops="arrd"></movef> -->
  </div>
</template>
<script>
import top from '../components/top'
import movef from '../components/movef'
export default {
 components:{
       top,
      movef,
    },
       data() {
        return{
            arr:[]
        }
    },
    created(){
        this.axios({
            mothod:"get",
            // url:"/movie",
            url:"/b"
        }).then((data)=>{
            // console.log(data.data.movie)
            // this.arr=data.data.movie
             console.log(data.data)
            this.arr=data.data
            })
    },
    //  computed:{
    //      fun(){
    //          if(i%24==0){

    //      }
    //  }         
    // },
  }
  
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
