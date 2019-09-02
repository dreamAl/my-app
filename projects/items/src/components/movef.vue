<template>
    <div>
       <div class="fuBox"  >
            <span>影院热映</span>
            <a href="#">更多</a>
        </div>
        <div class="xh"  >
            <movez  v-for="(v, i) in fuprops" :key="i" :zp="v.film_name"  :zimgurl="v.film_img" ></movez>     
            <!-- <movez></movez> -->
        </div>                    
    </div>
</template>
<script>
import movez from './movez'
export default {   
    components:{
        movez
    },
    props:["fuprops"]
    // props:{
    //     fuprops:{
    //         type:Array,
    //         required:true
    //     }
    // }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.xh{
     display: flex;
    overflow: auto;    
}
.fuBox{
    width: 90%;
    margin: 0.8rem auto 0;
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
