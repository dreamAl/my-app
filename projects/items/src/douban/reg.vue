<template>
<div style="font-size:0">
        <p class="title">欢迎加入豆瓣</p>
        <div class="tishi">{{text}}</div>
        <input type="email" v-model="email" placeholder="邮箱">
        <input :type="bool?'password':'text'" name="pwd"  placeholder="密码" v-model="pwd">
        <span @click="fun()">
                  <img src="../../static/img/show-pwd.png" v-if="bool">
                  <img src="../../static/img/show-pwds.png" v-else>
          </span>
        <input type="text" v-model="name" placeholder="用户名" class="namea">
        <input type="button" value="立即注册" @click="submitForm()">
        <p class="footer">点击「注册」代表你已阅读并同意用户使用协议</p>
        <a class="xiaapp" href="#">下载豆瓣App</a>
</div>
</template>
<script>
export default {
     data() {
       return {
          bool:true,
          email: '',
          pwd: '',
          name: '',
          text:""
      }
    },
    methods: { 
        fun() {
          this.bool=!this.bool
        },
        // 点击提交按钮发送数据
        submitForm(){
          // if(this.email==''||this.pwd==""||this.name==""){
          //   // return
          //   this.text="请输入完整信息"
          // }else{
          //   // 先实例化对象
          //   let param = new URLSearchParams();
          // // 添加发送数据参数：
          // param.append("email",this.email)
          // param.append("pwd",this.pwd)
          // param.append("name",this.name)
          // this.axios.post("http://localhost:4000/reg",param).then(
          //   (ok)=>{
          //     alert("注册成功")
          //     var i = 4;
          //         var mytimer = setInterval(()=>{
          //             i--;
          //             if(i == 0){
          //                 clearInterval(mytimer);
          //                 this.$router.push("/login");
          //             }
          //             this.text = "注册成功"+i+"秒后跳转";
          //           },1000)
          //     }) 
          // }
           this.$router.push("/login")
        }
    },  
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
        width: 100%;
        height: .46rem;
        font-size: .35rem;
        text-align: center;
        margin: .35rem 0;
        color: #42bd56;
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
        margin-top: .24rem;
    }
    input[type="button"]{
        margin-top: .15rem;
        margin-bottom: .24rem;
        color: #fff;
        background-color: #42bd56;
    }
    img{
        width: 0.3rem;
        height: .3rem;
        position: fixed;
        right: .3rem;
        top: 2rem
    }
    .footer{
        font-size: .14rem;
        color: #aaaaaa;
        text-align: center;
    }
    .xiaapp{
        font-size: .16rem;
        color: #42bd56;
        text-align: center;
        display: block;
        margin-top: .6rem;
    }
    .tishi{
        width: 100%;
        font-size: 0.16rem;
        color: red;
        text-align: center;
        position: absolute;
        top:1rem;
    }

</style>
