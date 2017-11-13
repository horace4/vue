<template>
   <ul class="clear ul1">
      <li v-for="item in movies1" :key='item.cover.url'>
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
</template>
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
.hotmovie-bottom li{
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
.hotmovie-bottom img{
  width:2.8rem;
  height:3.72rem;

}
</style>
<script>
  export default {
   props: {
    movies1:{
      type: Array
    }
   }
}
</script>
