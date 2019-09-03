<template>
    <div class="fl">
        <p>分类浏览</p>
        <div>
            <ul >
                <li v-for="(v, i) in obj" :key="i"> <a :href="v.url">{{v.name}}</a><span ></span></li>
            </ul>          
        </div>
    </div>
</template>
<script>
export default {
    props:{
        obj:{
            type:Array,
            required:true
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .fl{
        width: 95%;
        margin: 0.1rem auto ;
    }
    p{
        font-size: 0.15rem;
        color:#111111;
    }
    ul{
        margin-top: 0.2rem;
       font-size: 0rem;
    }
   li{
       display: inline-block;
       width: 50%;
       height:0.4rem;
       border-top:0.01rem solid #eee;
       border-right:0.01rem solid #eee;
       font-size: 0rem;
        box-sizing: border-box;
   }
   li>a{
       font-size: 0.14rem;
       color:#42bd56;
       line-height: 0.4rem;
       text-indent: 0.2rem;
       float: left;
   }
   li>span{
        color: #ccc;
        float:right;
        border-right: .01rem solid #ccc;
        border-bottom: .01rem solid #ccc;
        width: .12rem;
        height: .12rem;
        transform: rotate(-45deg);
        margin-top: 0.15rem;
        margin-right: 0.12rem;
   }

</style>
