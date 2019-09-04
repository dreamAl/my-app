<template>
    <div class="box">
       <div class="boxa">
            <p> 
               <!-- <img src="../../../static/img/7.jpg" alt=""> -->
               <img :src="imgurl" alt="">
                <span>{{booktit}}</span>
            </p>
          <span>{{bookper}}</span>
        </div>
        <h5><b>{{time}}</b><p>{{bookcont}}</p> </h5>
    </div>
</template>
<script>
export default {
    props:{
        imgurl:{
            type:String,
            required:true
        },
        booktit:{
            type:String,
            required:true
        },
        bookper:{
            type:String,
            required:true
        },
        time:{
            type:String,
            required:true
        },
        bookcont:{
            type:String,
            required:true
        },

    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .box{
        width: 90%;
        margin:0 auto;
        font-size:0;
        border-bottom: 0.01rem solid #f2f2f2;
        padding:0.3rem 0 0.1rem;
    }
    .boxa{
        width: 90%;
        display: flex;
        justify-content: space-between;
    }
    .boxa>p{
        width: 1.4rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .boxa>p>img{
        width: 0.48rem;
        height:0.48rem;
        vertical-align: middle;
        margin-right:0.1rem;
    }
    .boxa>p>span{
        font-size:.16rem;
        color:#111111;
        vertical-align: middle;
    }
    .boxa>span{
        font-size:.14rem;
        color:#cccccc;
        margin-top:0.2rem;
    }
    h5{
        display: flex;
        width: 2.6rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    h5>p{
        font-size:.14rem;
        color:#AAAAAA;
        margin-top:0.2rem;
        font-weight: 100; 
    }
    h5>b{
        margin-top: 0.2rem;
       font-size:.14rem;
        color:#AAAAAA;
        font-weight: 100; 
    }
</style>