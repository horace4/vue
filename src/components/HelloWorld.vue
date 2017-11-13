<template>
  <div class="hello" id="box">
  <main>
 <div class="hotmovie">
 <div class="hotmovie-top clear">
  <h2>影院热映</h2>
  <a href="#">更多</a>
 </div>
  <div class="hotmovie-bottom">
      <hotmovie :movies1='movies1'></hotmovie>
      </div>
  </div>
     <div class="freemovie">
  <div class="freemovie-top">
   <h2>免费在线观影</h2>
   <a href="#" class="fr">更多</a>
  </div>
   <div class="freemovie-bottom">
           <ul class="clear ul1">
             <li v-for="item in movies2" :key='item.cover.url'>
             <a :href="item.url">
               <img :src="item.cover.url" :alt="item.title">
               <p id="filmTitle">{{item.title}}</p>
               <div class="block">
               <el-rate v-bind:value="item.rating?item.rating.value:0" disabled show-score text-color="#ff9900" score-template="{value}" v-if="item.rating != null">

               </el-rate>
               <span v-if="item.rating == null">暂无评分</span>
              </div>
            </a>
             </li>
           </ul>
       </div>
   </div>
    <div class="newmovie">
  <div class="newmovie-top">
   <h2>新片速递</h2>
   <a href="#" class="fr">更多</a>
  </div>
   <div class="newmovie-bottom">
           <ul class="clear ul1">
             <li v-for="item in movies3" :key='item.cover.url'>
             <a :href="item.url">
               <img :src="item.cover.url" :alt="item.title">
               <p id="filmTitle">{{item.title}}</p>
               <div class="block">
               <el-rate v-bind:value="item.rating?item.rating.value:0" disabled show-score text-color="#ff9900" score-template="{value}" v-if="item.rating != null" >

               </el-rate>
               <span v-if="item.rating == null">暂无评分</span>
              </div>
            </a>
             </li>
           </ul>
       </div>
   </div>
  </main>
<!-- 发现好电影 -->
  <section>
            <header>
                <h2>发现好电影</h2>
            </header>
            <div class="sec-con">
                  <ul>
                      <li style="border-color: #FFC46C"> <a href="#" > 同时入选IMDB250和豆瓣电影250的电影</a> </li>
                      <li style="border-color: #CC3344"> <a href="#"> 带你进入不正常的世界</a> </li>
                      <li style="border-color: #2384E8"> <a href="#"> 用电影来祭奠逝去的岁月</a> </li>
                      <li style="border-color: #FFAC2D"> <a href="#"> 女孩们的故事【电影】</a> </li><br>
                      <li style="border-color: #42BD56"> <a href="#"> 使用APP找电影功能</a> </li>
                      <li style="border-color: #3BA94D"> <a href="#"> 科幻是未来的钥匙--科幻启示录【科幻题材】</a> </li>
                      <li style="border-color: #42BD56"> <a href="#"> 美国生活面面观</a> </li>
                      <li style="border-color: #FF4055"> <a href="#"> 2015终极期待</a> </li>
                      <li style="border-color: #4F9DED"> <a href="#"> 经典韩国电影--收集100部</a> </li>
                  </ul>
            </div>
  </section>
   <!-- 分类浏览模块 -->
    <section>
     <header>
       <h2>分类浏览</h2>
     </header>
       <div class="type">
         <ul class="type-ul">
           <li><a href="#">经典</a></li>
           <li><a href="#">冷门佳片</a></li>
           <li><a href="#">豆瓣高分</a></li>
           <li><a href="#">动作</a></li>
           <li><a href="#">喜剧</a></li>
           <li><a href="#">爱情</a></li>
           <li><a href="#">悬疑</a></li>
           <li><a href="#">恐怖</a></li>
           <li><a href="#">科幻</a></li>
           <li><a href="#">治愈</a></li>
            <li><a href="#">文艺</a></li>
           <li><a href="#">成长</a></li>
           <li><a href="#">动画</a></li>
           <li><a href="#">话语</a></li>
           <li><a href="#">欧美</a></li>
           <li><a href="#">韩国</a></li>
           <li><a href="#">日本</a></li>
         </ul>
       </div>
    </section>

  </div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  i.el-rate__icon{
     font-size: 0.28rem !important;
  }
  span.el-rate__item{
    width: 0.24rem;
  }
  .hotmovie-top>h2{
    display: inline-block;
    color:#111;
    float: left;
    margin-bottom: 0;
    font-size: 0.32rem;
}
.hotmovie-top>a{
    float: right;
    margin-bottom: 0;
    color:#42bd56;
}
::-webkit-scrollbar{width:0px}
.ul1{
  display: -webkit-flex; /* Safari */
  display: flex;
  min-width:6.4rem;
  overflow-x: auto;
  flex-direction: row;
}
main li{
  width: 2.4rem;
min-width: 2.4rem;
  margin-right:0.4rem;
  margin-left:0.1rem;


}
#filmTitle{
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
main img{
  width:2.8rem;
  height:3.72rem;

}
.freemovie{
  margin-top:0.86rem;
}
.newmovie{
  margin-top: 0.86rem;
}
/* 发现好电影模块 */
section{
     margin:0;
     overflow: hidden;
     background: #fff;
     margin-top: 0.6rem;
    /* margin-left: 0.4rem;
     margin-right: 0.4rem;*/
 }
 section h2{
     font-size: 0.32rem;
     display: inline-block;
     min-width: 8rem;
     color:#111;
     padding-left:0;
     padding-bottom: 0;
 }

 .sec-con ul{
     white-space: nowrap;
     overflow-x: auto;
    /* padding:0.30rem 0.3rem 0.86rem 0.3rem;*/
     font-size: 0;
     margin-left:-.05rem;
 }
 .sec-con>ul>li{
     font-size: 1.88rem;
     display: inline-block;
     border-radius: 5px;
     border:solid 1px;
     vertical-align: center;
     vertical-align: middle;
    /* margin: 0 0 0.16rem 0.16rem;*/
     border-radius: 25px;
     border-width: 1px;
     border-image: initial
 }
 .sec-con>ul>li>a{
     height: 50px;
     line-height: 50px;
    /* padding:0.3rem;*/
     display: block;
     text-align: center;
    display: block;
    padding: 0px 3.1rem;
    overflow: auto;
 }
 .line{
     width: 100%;
     display: block;
     height: 1px;
     border:0;
     margin:0;
 }
 /* 分类浏览 */
 .type{
  margin-left: 1rem;
  width: 100%;
 }
 .type-ul{
   /* padding: 2.24rem 0 3.76rem;*/
    color: #eee;

 }
 .type-ul li{
    width: 44%;
    border-top: solid 1px #eee;
    border-right: solid 1px #eee;
    float: left;
    height: 1.28rem;
 }
 .type-ul>li>a{
    color: #42bd56;
    text-decoration: none;
    float: left;
   /* width: 100%;*/
    line-height: 1.28rem;
    width:
 }
</style>
<script>

    import './../../base.css';
    import hotmovie from './hotmovie.vue'

export default {
   data(){
     return{
       author:"电影页面",
       movies1:[],
       movies2:[],
       movies3:[]
     }
   },
   mounted:function(){
     this.getMovies();
     this.getFree();
     this.getNew();
   },
   components: {hotmovie},
   methods:{
     getMovies(){
      this.$http.jsonp("https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?os=windows&callback=&start=0&count=8&loc_id=108288&_=1509792214324").then(function(response){
        this.movies1 =JSON.parse(response.bodyText).subject_collection_items;
       }

       ).then(()=>{
         this.getImage(this.movies1);
       }).catch((err)=>{
         console.log("err");
         console.log(err);
       })
     },
      getFree(){
             this.$http.jsonp("https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items?os=windows&callback=&start=0&count=8&loc_id=108288&_=1509792214326").then(function(response){
             this.movies2 =JSON.parse(response.bodyText).subject_collection_items;
       }).then(()=>{
         this.getImage(this.movies2);
       }).catch((err)=>{
         console.log("err");
         console.log(err);
       })
     },
      getNew(){
             this.$http.jsonp("https://m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items?os=windows&callback=&start=0&count=8&loc_id=108288&_=1509792214327").then(function(response){
             this.movies3 =JSON.parse(response.bodyText).subject_collection_items;
       }).then(()=>{
         this.getImage(this.movies3);
       }).catch((err)=>{
         console.log("err");
         console.log(err);
       })
     },
     getImage:function(movies){
       for(let i of movies){
         if(i.cover.url !=undefined){
           i.cover.url=i.cover.url.replace(/http\w{0,1}:\/\//g,'https://images.weserv.nl/?url=');
         }
       }
     }
   }
}


</script>
