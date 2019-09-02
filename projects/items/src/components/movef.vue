<template>
    <div>
       <div class="fuBox"  >
            <span>影院热映</span>
            <a href="#">更多</a>
        </div>
        <dir class="xh">
            <movez v-for="(v, i) in fuprops" :key="i"   ></movez>      
        </dir>                    
    </div>
</template>
<script>
import movez from './movez'
export default { 
    components:{
        movez
    },
    props:{
        fuprops:{
            type:Array,
            required:true
        }
    }
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
