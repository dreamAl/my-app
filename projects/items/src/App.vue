<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin:0px;
  padding: 0px;
}
html{
  font-size: 31.25vw;
}
a{
  text-decoration: none;
}
ul li{
  list-style:none;
}
.whites{
    display: block;
    margin-left:1.2rem;
}
</style>
