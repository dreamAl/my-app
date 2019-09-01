<template>
  <div>
     <p>{{text}}</p>
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
    data(){
        return{
            text:""
        }
    },
    created(){
        // 取出后台发送过来的token
        var localtoken=localStorage.getItem("token");      
            if(localtoken){
               this.axios.get("http://localhost:4000/index").then(
                    (ok)=>{
                    this.text="欢迎您"+data.email})
                
            }else{
               this.text="不好意思当前页面仅对会员开放，请您登录后再访问"
                this.$router.push("/login")
            }

            // this.axios({
        //     method:"/get",
        //     url:"http://localhost:4000/index"
        // }).then(
        //     (ok)=>{ alert("欢迎您"+ok.data.token)
        //     // console.log(data.email)
        //     },
        //     (err)=>{alert("请您登录后访问")
        //     this.$router.push("/login")})
       
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
