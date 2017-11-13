<template>
  <div id="header">
  <nav>
    <div class="logo"><span></span></div>

    <ul class="header-right">
    <li><router-link to="/movie">电影</router-link></li>
    <li><router-link to="/book">图书</router-link></li>
    <li><router-link to="/broadcast">广播</router-link></li>
    <li><router-link to="/group">小组</router-link></li>
    <li><span></span></li>
    </ul>
  </nav>
  </div>
</template>
<style>
  nav{
    width:100%;
   height:.4rem;
  border-bottom:1px solid black;
  /*margin-left: 0.4rem;
  margin-right: 0.4rem;*/
}
.logo{
  float:left;
}
  .logo>span{
    display:inline-block;
    height:0.44rem;
    width:0.92rem;
    background:url(../assets/豆瓣.png);
    background-size:cover;
  }
   .header-right{
     vertical-align: middle;
     float:right;
   }

  .header-right>li{
    float:left;
    margin-right:0.19rem;

  }
</style>
