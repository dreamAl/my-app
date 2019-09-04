<template>
<div>    
    <img src="../../static/img/green.gif" v-if="arr.length<=0" class="whites">  
<router-link to="/cont" v-else>
    <div class="box" v-for="(v,i) in arr" :key="i" @click="fun(i)" >
      <div class="left">
        <h3>{{arr[i].title}}</h3>
        <p class="conts">{{jqfun[i]}}</p> 
      </div>   
        <img :src="arr[i].image" alt="">        
        <p>
            <span>{{arr[i].category_name}}</span>
            <span class="spanss">{{arr[i].tags}}</span> 
        </p>        
    </div>
</router-link>   
</div>
</template>
<script>
export default {
   data(){
       return{
           arr:[],
           paonum:[]
       }
   },
    created(){
        setTimeout(()=>{
            this.axios({
            method:"get",
            url:"/shouyed"
        }).then(
            (data)=>{
                console.log(data.data.shouyed)
                this.arr=data.data.shouyed
                })

        },3000)
        
        },
        computed: {
            jqfun(){             
                let arrb=[]
                for(var i in this.arr){
                    let numa="";
                    let  temp=this.arr[i].content.split("<");
                    numa=temp[0].substring(0,30)
                    arrb.push(numa)
                }
                return arrb
            }
            
        },  
        methods:{
            fun(val){
               this.paonum =this.arr.filter((v,i)=>{
                    if(i==val){
                        return this.arr[i]
                    }
                })
                 this.$router.push({name:'cont',query:{arr:this.paonum}})
            }
        } 
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.box{
    width: 95%;
    height:1.5rem;
    margin: 0.2rem auto 0 ;
    border-bottom:0.01rem solid #ccc;
}
.conts{
    margin-top:0.1rem;
    font-size: 0.11rem;
    color:#AAAAAA;
}
.spanss{
    display: inline-block; 
    font-size: 0.12rem;
    color:#cccccc;
    margin-right:-0.7rem;  
    margin-top: 1.13rem;
}
p{
    display: flex;
    justify-content: space-between;
}
.left{
    width: 1.8rem;
   float:left;
   margin-left: 0.2rem;
}
.left>h3{
    font-size: 0.15rem;
    color:#494949;
    font-weight: 100;
}
img{
    float:right;
    width:0.7rem;
    height:1rem;
    margin-right: 0.2rem;
}
span{
    display: inline-block;
    margin-top: 1.1rem;
    font-size: 0.12rem;
    color:#ccc;
    margin-left: -1.8rem;
}
</style>
