<template>
    <div >
        <div class="boxa">
            <img src="../../../static/img/gb.png" alt="">
            <b>豆瓣</b> 
            <span>写了日记</span>
            <span>2017-03-01 19:30:41</span>
            <div class="boxb">
                <p>豆瓣App 4.12.0 主要更新</p>
                <u>可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...</u>
            </div>
            <div class="boxc">
                <span></span><i>4</i>
                <span></span><i>0</i>
                <span></span><i>1</i>
                <span></span>
            </div>
        </div>        
    </div>
</template>
<script>
export default {
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.boxa{
    width: 90%;
    margin:0 auto;
    border-bottom: 0.01rem solid #e8e8e8;
    height:2.2rem;
    font-size: 0;
    padding-top: 0.25rem;
    position: relative;
}
.boxa>img{
    width: 0.44rem;
    height:0.44rem;
    border-radius: 50%;
    position: absolute;
    top:0.15rem;
}
.boxa>b{
    font-size: 0.17rem;
    color:#494949;
    margin-left: 0.6rem;
}
.boxa>span:nth-of-type(1){
    font-size: 0.14rem;
    color:#AAAAAA;
}
.boxa>span:nth-of-type(2){
    font-size: 0.12rem;
    color:#AAAAAA;
    display: block;
    text-indent: 0.6rem;
}
.boxb{
    width: 70%;
    margin: 0.1rem 0.5rem 0.2rem ;
    padding: 0.1rem;
    border-radius: .04rem;
    border: .01rem solid #d8d8d8;
}
.boxb>p{
  font-size: 0.17rem;
    color:#494949;
}
.boxb>u{
    text-decoration: none;
    font-size: 0.12rem;
    color:#AAAAAA;    
}
.boxc{
    display: flex;
     margin-left: 0.5rem;
}
.boxc>span{   
    display: inline-block;
    width: 0.24rem;
    /* height:0.24rem; */
    /* border:0.01rem solid pink; */
}
.boxc>span:nth-of-type(1){
    background-image: url(https://img3.doubanio.com/f/talion/7a0756b3b6e67b59ea88653bc0cfa14f61ff219d/pics/card/ic_like_gray.svg);    
}
.boxc>span:nth-of-type(2){
    background-image:url(https://img3.doubanio.com/f/talion/ac8a7e0d5f471480549c7abf45fc0fa4c3b4184f/pics/card/ic_comment.svg);
}
.boxc>span:nth-of-type(3){
    background-image:url(https://img3.doubanio.com/f/talion/8604ef3950b947d55406e2a6f5cf6ca7f0b934e3/pics/card/ic_retweet_gray.svg);
}
.boxc>span:nth-of-type(4){
    margin-left: 0.6rem;
    background-repeat: no-repeat;
    background-position: 0 0.09rem ;
    background-image:url(https://img3.doubanio.com/f/talion/be268c0a1adb577c8dfdcfbe48c818af3983ed62/pics/card/more.svg);
}
.boxc>i{   
    display: inline-block;
    width: 0.24rem;
    /* height:0.24rem; */
    /* border:0.01rem solid yellow; */
    font-size: 0.14rem;
    color:#AAAAAA;
    font-style: normal;
    text-align: center;
    line-height: 0.24rem;
}
</style>
