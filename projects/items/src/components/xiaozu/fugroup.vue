<template>
    <div class="minb">
        <p>租房找室友</p>
        <!-- <zigroup></zigroup> -->
        <div class="box">
       <div>
            <p> 
               <!-- <img src="../../../static/img/7.jpg" alt=""> -->
               <img :src="obj[0].images.small" alt="">
                <!-- <span>成都租房</span> -->
                <span>obj[0].title</span>
            </p>
          <span>{{obj[0].group_member}}</span>
        </div>
        <p>{{obj[0].group_topic.title}}</p> 
    </div>
    </div>
</template>
<script>
import zigroup from './zigroup'
export default {
    components:{
        zigroup
    },
    data(){
        return{
            obj:[]
        }
    },
    created(){
        this.axios({
            method:"get",
            url:"/xiaozua"
        }).then((ok)=>{
            // console.log(ok.data.xiaozua)
            this.obj=ok.data.xiaozua
            })
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.minb{
    width:100%;
     padding:0.4rem 0;
}
 p{
     width: 90%;
     margin:0 auto 0.1rem;
     font-size: .15rem;
     color:#111111;
 }
 .box{
        width: 90%;
        margin:0 auto;
        font-size:0;
        border-bottom: 0.01rem solid #ccc;
       
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
        font-size:.14rem;
        color:#cccccc;
        margin-top:0.2rem;
    }
    .box>p{
        font-size:.15rem;
        color:#AAAAAA;
    }
</style>
