<template>
<div class="fuBoxs">
    <div class="fuBox" >
        <span>{{titname}}</span>
        <a href="#">更多</a>
    </div>
        <div class="fontBox">
            <fontz  v-for="(v,i) in fuprops"  :key="i"  :ahref="v.href" :atit="v.title" 
             :style='{color:v.color}' ></fontz>
        </div>      
</div>
</template>
<script>
import fontz from './fontz'
export default {
    components:{
        fontz
    },
    props:{
        fuprops:{
            type:Array,
            required:true
        },
        titname:{
            type:String,
            required:true
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fuBoxs{
    width: 94%;
    margin:0 auto;
}
.fuBox{ 
    margin: 0.1rem auto;
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
.fontBox{
    font-size: 0;
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
}
</style>
