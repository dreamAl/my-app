<template>
<div class="ziBox">
    <div class="divBox">
        <img :src="zimgurl" alt="">
        <span>{{zp}}</span>
        <p class="pfBox">
            <five-star :fivexx="pf"></five-star>
            <span >{{scor}}</span>
        </p>
    </div>   
</div>   
</template>
<script>
import fiveStar from './fiveStar'
export default {
    components:{ 
        fiveStar
    },
    
    props:["zimgurl","zp","pf","scor"],
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ziBox{
    width: 95%;
    margin:0.1rem auto ;    
}
.divBox{
    width: 1.3rem;  
    text-align: center;
    font-size: 0;
}
.divBox>img{
    width: 1.1rem;
    height:1.5rem;
}
.divBox>span{   
    display: block;
    font-size: 0.15rem;
    width: 90%;
    margin:0 auto; 
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.divBox>p{   
    font-size: 0.16rem;
}
.pfBox{
    width: 90%;
    margin:0 auto; 
    display: flex;
    justify-content: space-between;
}
.pfBox>span{
    font-size: 0.15rem;
}
</style>
