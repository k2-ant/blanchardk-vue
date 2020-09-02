<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
    height: 100%;
    min-height: 500px;
    background: 
    url('/img/background.jpg'); 
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
    margin: 0;
}

@media screen and (max-width: 768px) {
  body {
    background: rgb(255,255,255);
    background: linear-gradient(201deg, rgba(255,255,255,1) 0%, rgba(242,242,242,1) 45%, rgba(157,157,157,1) 100%);
      background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}

#nav a {
  color: #2c3e50;
}

</style>
