<template>
<div class="container-fluid masthead min-vh-100 ">
  <Nav />
  <Callout />
</div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Callout from '@/components/Callout.vue'

export default {
  name: 'Home',
  components: {
    Nav,
    Callout
  }
}
</script>

<style>

.cta {
  border-radius: 100px;
}
.masthead {
    height: 100vh;
    min-height: 500px;
    background: 
    url('/img/background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;
    }
</style>