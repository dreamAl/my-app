<template>
<div class="ziBox">
    <div class="divBox">
        <img src="../../static/img/10.jpg" alt="">
        <span>无问西东</span>
        <p>11111111111</p>
    </div>  
</div>
    
</template>
<script>
export default {
    data() {
        return{
            arr:[]
        }
    },
    props:{
        zimgurl:{
            type:String,
            require:true
        },
        zp:{
            type:String,
            require:true
        }
    },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ziBox{
    width: 90%;
    margin:0.1rem auto 0;    
}
.divBox{
    width: 1.3rem;  
    text-align: center;
    font-size: 0;
}
.divBox>img{
    width: 1.3rem;
    height:1.2rem;
}
.divBox>span{   
    display: block;
    font-size: 0.15rem;
}
.divBox>p{   
    font-size: 0.16rem;
}
</style>
