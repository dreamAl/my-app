<template>
  <div v-if="funum">
    <!-- 在调用子组件这里创建函数来接收抛出的自定义函数 -->
    <sqcen @zipao="fu"></sqcen>
    <img src="../../static/img/green.gif" v-if="arri.length<=0" class="whites">  
    <div v-else>
    <div class="diva" >
      <consp  v-for="(v, i) in arri" :key="i" :titurl="v.url" :tita="v.name" 
      :titb="v.des" :titd="v.color"></consp>
    </div>
    <div class="divf">
        <router-link to="/reg">注册账号</router-link>
        <router-link to="/login">登录豆瓣</router-link>
    </div> 
    <div class="divf divft">
        <a href="#">使用桌面版</a>
        <a href="#">使用豆瓣APP</a>
    </div>
    </div>    
  </div>
    <div v-else>
        <top></top>
        <div class="sqbox">
            <input type="text" v-model="futext">
            <span>搜索</span>
        </div>
        <div>
            <movef titname="影院热映" :fuprops="arra" ></movef>
            <parbook titname="最受关注图书 | 虚构类" :fuprops="arrb"></parbook>
        </div>
    </div>
</template>
<script>
import sqcen from '../components/sq/sqcen'
import consp from '../components/sq/consp'
// 键盘按键按下后页面
import top from '../components/top'
import movef from '../components/movef'
import parbook from '../components/parbook'
export default {
  components:{
    sqcen,
    consp,
    // 键盘按键按下后页面
    top,
    movef,
    parbook,
  },
  data(){
        return{
            arri:[],
            arra:[],
            arrb:[],
            funum:Boolean ,
            futext:""           
        }
    },
    methods:{
      fu(val,tst){
        this.funum=val;
        this.futext=tst;
      }
    },
  created(){
    setTimeout(()=>{
      this.axios({
            mothod:"get",
            url:"/searchClass"
        }).then((data)=>{
            console.log(data.data)
            this.arri=data.data
            })
    },1000) ;
    
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
        }) ; 
        this.axios({
            mothod:"get",
            url:"/book"
        }).then((data)=>{
            var arrs=data.data.book
            console.log(data.data.book)
            arrs.filter((v,i)=>{
              if(i<15){
                this.arrb.push(arrs[i])
              }
              return
            })
            })        
    },
    props:["fuprops"] 
    } 

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.diva{
  margin-left: 0.3rem;
  font-size: 0;
}
.divf{
  font-size: 0;
  padding:0.15rem 0.15rem;
  border-top:0.01rem solid #f3f3f3;
  border-bottom:0.01rem solid #f3f3f3;
}
.divf>a{
  display: inline-block;
  font-size: 0.16rem;
  color:#42bd56;
  text-align: center;
  border-right:0.01rem solid #f3f3f3;
}
.divf>a:nth-of-type(1){
  width: 50%;
}
.divf>a:nth-of-type(2){
  margin-left: 0.27rem;
}
.divft{
  border-top:none;
}
.sqbox{
    border-bottom:0.01rem solid #f2f2f2;
    }
.sqbox>input{
    font-size: .2rem;
    margin-left:0.05rem;
    width:2.3rem;
    height:0.3rem;
    border:none;
    border:0.01rem solid #f2f2f2;
    background:#f3f3f3;
}
.sqbox>span{
    font-size:0.16rem;
}
</style>
