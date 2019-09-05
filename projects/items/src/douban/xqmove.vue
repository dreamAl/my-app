<template>
    <div>
       <top></top> 
       <banner></banner>
       <div class="geli">{{fumove[0].screenwriter}}</div>
    </div>
</template>
<script>
import top from '../components/top'
import banner from '../components/banner'
export default {
    components:{
        top,
        banner,
    },
    data(){
        return{
            fumove:[]
        }
    },
     created(){
        this.fumove=this.$route.query.arr
        console.log(this.fumove)
    },
}
</script>
<style  scoped>
.geli{
    margin-top:1.2rem;
}
</style>