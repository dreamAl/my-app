<template>
    <div>
       <top></top> 
       <banner></banner>
       <div class="geli">
           <div class="pfbox">
               <h4>{{fumove[0].title}}</h4> 
            <p>
                <van-rate v-model="value" readonly />
                <span>&nbsp;{{fumove[0].rating.average}} &nbsp;</span>
               <span>{{fumove[0].numRaters}}人评价</span>
            </p>
            <h6>
                <em>{{fumove[0].pubdate}}/{{fumove[0].tags.title}}/{{fumove[0].author}}/{{fumove[0].publisher}}</em>
                <a href="#">用APP查看影人资料</a>
            </h6>
            
            <img :src="fumove[0].film_img" alt="">          
           </div> 
            <div class="look">
                <a href="#">想看</a>
                <a href="#">看过</a>
            </div> 
            <div class="brief">
                <b>{{fumove[0].title}}的简介</b>
                <p>{{fumove[0].pubdate}}</p>
            </div> 
            <div class="more">
                <a href="#">剧情</a>
                <a href="#">爱情</a>
                <a href="#">战争</a>
            </div> 
            <dir class="pict">
                <p>{{fumove[0].title}}的图片</p> 
                <div class="slid">
                    <img :src="fumove[0].images.small" v-for=" i in 9" :key="i">  
                </div>                                
            </dir>               
        </div>
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
            fubook:[],
            value:this.score,
        }
    },
     created(){
        this.fubook=this.$route.query.arr
        console.log(this.fubook)
    },
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
     margin-top:-1.2rem;
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
    padding:0.12rem;
    background:#ccc;
    border-radius: 0.3rem;
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