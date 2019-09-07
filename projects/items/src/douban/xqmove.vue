<template>
    <div>
       <top></top> 
       <banner></banner>
       <div class="geli">
           <div class="pfbox">
               <h4>{{fumove[0].film_name}}</h4> 
            <p>
                <van-rate v-model="numa" readonly />
                <!-- <van-rate v-model="j" readonly  /> -->
                <span>&nbsp;{{fumove[0].score}} &nbsp;</span>
               <span>{{fumove[0].score_number}}人评价</span>
            </p>
            <h6>
                <em>{{fumove[0].time_year}}/{{fumove[0].film_type}}/{{fumove[0].actors}}/{{fumove[0].shooting_country}}</em>
                <a href="#">用APP查看影人资料</a>
            </h6>
            
            <img :src="fumove[0].film_img" alt="">          
           </div> 
            <div class="look">
                <a href="#">想看</a>
                <a href="#">看过</a>
            </div> 
            <div class="brief">
                <b>{{fumove[0].film_name}}的简介</b>
                <p>{{fumove[0].release_time}}</p>
            </div> 
            <div class="more">
                <a href="#">剧情</a>
                <a href="#">爱情</a>
                <a href="#">战争</a>
            </div> 
            <dir class="pict">
                <p>{{fumove[0].film_name}}的图片</p> 
                <div class="slid">
                    <img :src="fumove[0].film_img" v-for=" i in 9" :key="i">  
                </div>                                
            </dir> 
            <gb v-for="i in 5" :key="i"></gb> 
             <div>
               <foot></foot>    
            </div> 
        </div>
    </div>
</template>
<script>
import top from '../components/top'
import banner from '../components/banner'
import gb from '../components/logined/gb'
import fontf from '../components/fontf' 
import foot from '../components/foot'       

export default {
    components:{
        top,
        banner,
        gb,
        fontf,
        foot
    },
    data(){
        return{
            fumove:[],
            numa:0
        }
    },
     created(){
        this.fumove=this.$route.query.arr
        this.numa=parseFloat(this.fumove[0].score)/2
                    
        // console.log(this.fumove.length)
        if(this.fumove.length==15){
        this.$router.push("/move");
    }
 }
}
</script>
<style  scoped>
.geli{
    margin:1.35rem auto 0;
    width: 90% ;
}
.pfbox>h4{
    font-size:0.14rem;
}
.pfbox>p{font-size:0;
display:flex;
line-height: 0.5rem;
}

.pfbox>p>span{
    font-size:0.13rem;
    color: #ccc;
}
.pfbox>h6{
    width:70%;
 font-size:0rem; 
 font-weight:100;  
}
.pfbox>h6>em{
    font-style:normal;
    font-size:0.12rem;
}
.pfbox>h6>a{
    display:inline-block;
    font-size: 0.14rem;
    color:#42bd56;
    /* line-height:0.18rem; */
}
.pfbox>img{
    width: 30%;
    height:1.3rem;
     float:right;
     display:block;
     margin-top:-1.5rem;
}
.look{
    font-size:0;
    display:flex;
}
.look>a{
    font-size:0.16rem;
    color:orange;
    display:inline-block;
    width: 2rem;
    height:0.3rem;
    line-height: 0.3rem;
    text-align: center;
    border:0.01rem solid orange;
    border-radius: 0.03rem;
    margin:0.25rem 0.05rem;
}
.brief{font-size:0;}
.brief>b{
    font-weight: 100;
    font-size:0.14rem;
    color:#ccc;
}
.brief>p{
    font-size:0.14rem;
    line-height: 0.2rem;
}
.more{font-size:0rem;}
.more>a{
    display:inline-block;
    font-size:0.14rem;
    color:black;
    padding:0.12rem;
    background:#ccc;
    border-radius: 0.2rem;
    margin:0.2rem 0.07rem;
}
.pict{font-size:0rem;}
.pict>p{
    font-size:0.14rem;
   
}
.slid{display:flex;overflow:auto;}
.slid>img{
    display:inline-block;
    width: 1rem;
    height: 1rem;
    margin:0.06rem 0.04rem;
}
</style>