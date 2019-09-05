<template>
    <div >
       <div class="fuBox"  >
            <span>{{titname}}</span>
            <a href="#">更多</a>
        </div>
        <div class="xh">
            <div v-for="(v, i) in fuprops" :key="i"  @click="zimove(i)">
                <movez  :zp="v.film_name"  :zimgurl="v.film_img" :pf="v.score" :scor="v.score"></movez>     
            </div>               
        </div>                    
    </div>
</template>
<script>
import movez from './movez'
export default {   
    components:{
        movez
    },  
    data(){
        return{
            movexq:[]
        }
    },   
    methods:{
        zimove(val){
            this.movexq=this.fuprops.filter((v,i)=>{
                if(i==val){
                    return this.fuprops[i]
                }
            })
            this.$router.push({name:'xqmove',query:{arr:this.movexq}})
        }
    },   
    props:["fuprops","titname"],
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
