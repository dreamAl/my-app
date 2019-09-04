<template>
    <div >
       <div class="fuBox"  >
            <span>{{titname}}</span>
            <a href="#">更多</a>
        </div>
        <div class="xh"  >
            <movez  v-for="(v, i) in fuprops" :key="i" :zp="v.title"  :zimgurl="v.image" 
            :pf="v.rating.average" :scor="v.rating.average"
         ></movez>     
        </div>                    
    </div>
</template>
<script>
import movez from './movez'
export default {   
    components:{
        movez
    }, 
    props:["fuprops","titname"] 
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.xh{
    margin: 0 auto;
     display: flex;
    overflow: auto;    
}
.fuBox{ 
    width: 90%;  
    margin: 0 auto ;    
    display: flex;
    justify-content: space-between;
}
.fuBox>span{
    font-size: 0.15rem;
    color:#111111;
}
.fuBox>a{
    font-size: 0.13rem;
    color:#42bd56;
}
</style>
