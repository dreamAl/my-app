<template>
    <div>
       <top></top> 
       <banner></banner>
        <img src="../../static/img/green.gif" v-if="arr.length<=0" class="whites">
       <div class="geli" v-else>
           <div class="pfbox">
               <h4>{{fubook[0].title}}</h4> 
            <p>
                <van-rate v-model="numa" readonly />
                <span>&nbsp;{{fubook[0].rating.average}} &nbsp;</span>
               <span>{{fubook[0].numRaters}}人评价</span>
            </p>
            <h6>
                <em>{{fubook[0].pubdate}}/{{fubook[0].tags.title}}/{{fubook[0].author}}/{{fubook[0].publisher}}</em>
                <a href="#">用APP查看影人资料</a>
            </h6>
            
            <img :src="fubook[0].image" alt="">          
           </div> 
            <div class="look">
                <a href="#">想看</a>
                <a href="#">看过</a>
            </div> 
            <div class="brief">
                <b>{{fubook[0].title}}的简介</b>
                <p>{{fubook[0].pubdate}}</p>
            </div> 
            <div class="more">
                <a href="#">剧情</a>
                <a href="#">爱情</a>
                <a href="#">战争</a>
            </div> 
            <dir class="pict">
                <p>{{fubook[0].title}}的图片</p> 
                <div class="slid">
                    <img :src="fubook[0].image" v-for=" i in 9" :key="i">  
                </div>                                
            </dir> 
            <gb v-for="i in 5" :key="i"></gb>  
            <div>
                <fontf titname="推荐的豆列" :fuprops="arr"></fontf>
            </div> 
            <foot></foot>                   
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
            fubook:[],
            arr:[],
            numa:0,
        }
    },
    props:["fuprops"],
     created(){
          this.axios({
            method:"get",
            url:"/goodBook"
        }).then((data)=>{
            console.log(data.data.goodBook)
            this.arr=(data.data.goodBook)
        }); 
        this.fubook=this.$route.query.arr
        
        this.numa=parseFloat(this.fubook[0].rating.average)/2

        if(this.fubook.length==15){
            this.$router.push("/book")
        };
          
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
    margin-top:-0.8rem;
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