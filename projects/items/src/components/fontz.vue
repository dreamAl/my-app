<template>
    <a :href="ahref" >{{atit}}</a>
</template>
<script>
export default{
    props:["atit","ahref"]
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    a{
        display: inline-block;
        font-size: 0.14rem;
        width: auto;
        height:0.5rem;
        line-height: 0.5rem;
        overflow: auto;
        padding:0 0.1rem;
        border:0.01rem solid rgb(255, 172, 45);
        border-radius: 0.05rem; 
        margin:0.05rem 0  0.1rem 0.05rem;
        flex-shrink: 0;     
    }
</style>
