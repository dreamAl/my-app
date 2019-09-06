<template>
    <div class="ftBox">
        <div class="footp">
            <img src="../../static/img/login.png" alt="">
            <p>豆瓣</p><span>我们的精神角落</span>
        </div>
        <h1><a href="#">去 App Store 免费下载 iOS 客户端</a></h1>
    </div>
</template>
<script>
export default {
}
</script>  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .ftBox{
        width: 100%;
        height:1.5rem;
    }
    .footp{
        width: 2rem;
        margin: 0.3rem auto;
        font-size: 0;
    }
    .footp>img{
        width: .55rem;
        height: .55rem;
        float: left;
        margin-right: 0.15rem;
    }
    .footp>p{
        font-size: 0.22rem;
        color:#111111;
    }
    .footp>span{
        display: inline;
        font-size: 0.14rem;
        color:#111111;
    }
    h1{
        font-size: 0rem;
        text-align: center; 
        font-size: .14rem;
        font-weight: 100;
        
    }
    h1>a{
        color:#42bd56;
    }
</style>
