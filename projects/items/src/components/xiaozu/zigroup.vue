<template>
    <div class="box">
       <div>
            <p> 
               <img src="../../../static/img/7.jpg" alt="">
                <span>成都租房</span>
            </p>
          <span>24556人</span>
        </div>
        <p>111111111111111111111111111111</p> 
    </div>
</template>
<script>
export default {
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .box{
        width: 90%;
        margin:0 auto;
        font-size:0;
        border-bottom: 0.01rem solid #ccc;
        /* padding:0.4rem 0; */
    }
    .box>div{
        display: flex;
        justify-content: space-between;
    }
    .box>div>p>img{
        width: 0.48rem;
        height:0.48rem;
        vertical-align: middle;
        margin-right:0.1rem;
    }
    .box>div>p>span{
        font-size:.18rem;
        color:#111111;
        vertical-align: middle;
    }
    .box>div>span{
        font-size:.15rem;
        color:#cccccc;
         margin-top:0.2rem;
    }
    .box>p{
        font-size:.15rem;
        color:#AAAAAA;
    }

</style>
