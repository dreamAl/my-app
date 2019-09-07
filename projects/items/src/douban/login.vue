<template>
<div style="font-size:0">
        <h1 class="title">
            <back></back>
            登录豆瓣
        </h1>
        <div class="tishi">{{text}}</div>
        <input type="email" v-model="email" placeholder="邮箱"/>
        <input type="password" v-model="pwd" placeholder="密码"  class="namea"/>
        <span @click="fun()">
          <img src="../../static/img/show-pwd.png" v-if="bool">
          <img src="../../static/img/show-pwds.png" v-else>
        </span>
        <input type="button" value="登录" @click="funa()"/>
        <p>使用其他方式登录 & 找回密码</p>
        <div class="footer">
            <!-- <a href="#">注册豆瓣账号</a> -->
             <router-link to="./reg"> 注册豆瓣账号</router-link>           
            <a href="#">下载豆瓣App</a>
        </div>
        <logina></logina>
    </div>
</template>
<script>
import logina from '../components/logina'
import back from '../components/back'
export default {
    components:{
        logina,
          back
    },
    data(){
    return {
      bool:true,
      pwd: '',
      email:"",
      text:""
    }
  },
    methods:{
       fun() {
          this.bool=!this.bool
        },
        funa(){
          //        if(this.email==''&& this.pwd==""){
          //   // return
          //   this.text="请输入完整信息"
          // }else{
          //   // 先实例化对象
          // let param = new URLSearchParams();
          // // 添加发送数据参数：
          // param.append("email",this.email)
          // param.append("pwd",this.pwd)
          // this.axios.post("http://localhost:4000/login",param).then(
          //   (ok)=>{      
          //     localStorage.setItem("token",ok.data.token)
          //     // console.log(ok)
          //     var i = 4;
          //         var mytimer = setInterval(()=>{
          //             i--;
          //             if(i == 0){
          //                 clearInterval(mytimer);
          //                this.$router.push("/index")
          //             }
          //             this.text = "登录成功"+i+"秒后跳转";
          //           },1000)
          //     }) 
          // }
          this.$router.push("/index")
        }
    }, 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
        width: 100%;
        height: .5rem;
        font-size: .2rem;
        text-align: center;
        line-height: .5rem;
        border-bottom: 1px solid #eee;
    }
     input{
        width: 87%;
        height: .5rem;
        margin: 0 5%;
        outline: none;
        border:none;
        border-top: 1px solid #ccc;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        border-top-left-radius: 0.04rem;
        border-top-right-radius: 0.04rem;
        font-size: .16rem;
        padding-left: 3%; 
    }
    .namea{
      border-bottom: 1px solid #ccc;
    }
    input[type="email"]{
        margin-top: .4rem;
    }
    input[type="button"]{
        margin-top: .15rem;
        margin-bottom: .24rem;
        color: #fff;
        background-color: #42bd56;
        border-radius: 5px;
    }
       img{
        width: 0.3rem;
        height: .3rem;
        position: fixed;
        right: .3rem;
        top: 1.5rem
    }
    p{
        width: 100%;
        font-size: .15rem;
        color: #aaaaaa;
        text-align: center;
    }
    .footer{
        width: 100%;
        margin-top: .5rem;
        text-align: center;
    }
    .footer a{
        font-size: .15rem;
        color: #42bd56;
        margin-right: .15rem;
    }
    .tishi{
        width: 100%;
        font-size: 0.16rem;
        color: red;
        text-align: center;
        position: absolute;
        top:.6rem;
    }
</style>
