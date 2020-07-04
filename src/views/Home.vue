<template>
<div class="container-fluid masthead min-vh-100 ">
  <Nav />
  <Callout />
  <Books />
</div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Callout from '@/components/Callout.vue'
import Books from '@/components/Books.vue'

export default {
  name: 'Home',
  components: {
    Nav,
    Callout,
    Books
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
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
    }
</style>