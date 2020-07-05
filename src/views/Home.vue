<template>
<div class="container-fluid masthead min-vh-100 ">
  <Nav />
  <Callout />
  <Title title="Currently Reading..." />
  <Books />
</div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Callout from '@/components/Callout.vue'
import Books from '@/components/Books.vue'
import Title from '@/components/Title.vue'

export default {
  name: 'Home',
  components: {
    Nav,
    Callout,
    Books,
    Title
  }
}
</script>

<style>

body, html {
  height: 100% !important;
}

.cta {
  border-radius: 100px;
}
.masthead {
    height: 100%;
    min-height: 500px;
    background: 
    url('/img/background.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
    }
</style>