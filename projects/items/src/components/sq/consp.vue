<template>
    <div class="divb">
        <a :href="titurl" :style="{color:titd}">{{tita}}</a>
        <span>{{titb}}</span>
    </div>     
</template>
<script>
export default {
    props:{
        tita:{
            type:String,
            required:true
        },
        titurl:{
            type:String,
            required:true
        },
        titb:{
            type:String,
            required:true
        },
         titd:{
            type:String,
            required:true
        },
    }, 
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .divb{
        width: 33%;
        font-size: 0;
        margin: 0.2rem 0;
        display: inline-block;
    }
    .divb>a{
        display: inline-block;
        font-weight: 100;
        font-size: 0.24rem;
    }
    .divb>span{
        display: block;
        font-size: 0.12rem;
        color:#999999;
    }
</style>
