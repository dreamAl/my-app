<template>
  <div>
    <a href="#" @click="fun()">取消</a>
  </div>     
</template>

<script>
export default {
  methods:{
      fun(){   
             this.$router.go(-1)         
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
  color: #42bd56;
  font-size: .15rem;
  position: absolute;
  left:.2rem;
}
</style>
