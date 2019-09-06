<template>
  <div>
   <top></top>
   <div style="margin-top:0.7rem" >
    <movef titname="影院热映" :fuprops="arra" ></movef>
    <movef titname="免费在线观影" :fuprops="arrb"></movef>
    <movef titname="影片速递" :fuprops="arrc"></movef>
   </div> 
    <div>
      <fontf titname="发现好电影" :fuprops="arr"></fontf>
    </div> 
    <div >
      <fenlan  :obj="obj"></fenlan>
    </div> 
    <div>
      <foot></foot>
    </div>
  </div>  
</template>
<script>
import top from '../components/top'
import movef from '../components/movef'
import fontf from '../components/fontf'
import fenlan from '../components/fenlan'
import foot from '../components/foot'
export default {
 components:{
       top,
      movef,
      fontf,
      fenlan,
      foot
    },
       data() {
        return{
            arr:[],
            arra:[],
            arrb:[],
            arrc:[],
            obj:[]
        }
    },
    created(){
         this.axios({
            mothod:"get",
            url:"/a"
        }).then((data)=>{
            var arrs=data.data
            arrs.filter((v,i)=>{
              if(i<15){
                this.arra.push(arrs[i])
              }  
              return
            })
            arrs.filter((v,i)=>{
              if(i>15&&i<30){
                this.arrb.push(arrs[i])
              }
              return
            })
            arrs.filter((v,i)=>{
              if(i>30&&i<45){
                this.arrc.push(arrs[i])
              }
              return
            })
            });
          this.axios({
            method:"get",
            url:"/dy"
        }).then((data)=>{
            // console.log(data.data.dy)
            this.arr=(data.data.dy)
        });
        this.axios({
            method:"get",
            url:"/fenlan"
        }).then((data)=>{
            // console.log(data.data)
            this.obj=(data.data)
        });
    },
  }
  
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
