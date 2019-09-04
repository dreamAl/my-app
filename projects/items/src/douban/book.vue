<template>
  <div>
   <top></top>
    <img src="../../static/img/green.gif" v-if="arr.length<=0" class="whites">  
   <div style="margin-top:0.7rem"  v-else>
      <parbook titname="最受关注图书 | 虚构类" :fuprops="arra"></parbook>
      <parbook titname="最受关注图书 | 非虚构类" :fuprops="arrb"></parbook>
      <bookz ></bookz>
      <parbook titname="豆瓣纸书" :fuprops="arrc"></parbook>
   </div>   
   <div>
     <fontf titname="发现好书" :fuprops="arr"></fontf>
   </div>
     <!-- <bookz ></bookz> -->
   <div>
     <fenlan  :obj="obj"></fenlan>
   </div>
    <div>
      <foot></foot>
    </div>
  </div>
</template>
<script>
import top from '../components/top'
import parbook from '../components/parbook'
import bookz from '../components/bookz'
import fontf from '../components/fontf'
import fenlan from '../components/fenlan'
import foot from '../components/foot'
export default {
 components:{
       top,
       parbook,
       bookz,
       fontf,
       fenlan,
       foot
    },
    data(){
      return{
        arr:[],
        arra:[],
        arrb:[],
        arrc:[],
        obj:[]
      }      
    },
    created(){
      setTimeout(()=>{
         this.axios({
            mothod:"get",
            url:"/book"
        }).then((data)=>{
          console.log(data.data.book)
          // this.arr=data.data.book
            var arrs=data.data.book
            arrs.filter((v,i)=>{
              if(i<10){
                this.arra.push(arrs[i])
              }
              return
            })
            arrs.filter((v,i)=>{
              if(i>11&&i<20){
                this.arrb.push(arrs[i])
              }
              return
            })
            arrs.filter((v,i)=>{
              if(i>21&&i<30){
                this.arrc.push(arrs[i])
              }
              return
            })
            });
          this.axios({
            method:"get",
            url:"/goodBook"
        }).then((data)=>{
            console.log(data.data.goodBook)
            this.arr=(data.data.goodBook)
        });
      this.axios({
            method:"get",
            url:"/fenlan"
        }).then((data)=>{
            console.log(data.data)
            this.obj=(data.data)
        });

      },3000)
     
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
