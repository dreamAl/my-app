<template>
  <div>
   <top></top>
   <movef :fuprops="arr"></movef>
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
            url:"/movie"
        }).then((data)=>{
            console.log(data.data.movie)
            this.arr=data.data.movie
            })
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
