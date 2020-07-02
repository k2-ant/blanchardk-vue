<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-none">
    <div class="order-0">
        <router-link class="navbar-brand" :to="{ name: 'Home'}"><img height="30" src="../../public/img/logo.jpg"></router-link>
    </div>
  </nav>
</template>

<script>
export default {
    data: function() {
        return {

        }
    }
    
}
</script>


<style>

    .cta {
        background: linear-gradient(
                rgba(234, 28, 145,1.00),
                rgba(254, 18, 195,1.00)
            );
        padding: 0.7em 3em 0.7em 3em;
        border: none;
        box-shadow: 1px 1px 20px rgba(0,0,0,0.2);
        font-weight: 900;
    }

    .cta:hover {
        background: linear-gradient(
                rgba(254, 18, 195,1.00),
                rgba(234, 28, 145,1.00)
            );
    }

    .cta:active {
        background: linear-gradient(
                rgba(254, 18, 195,0.7),
                rgba(234, 28, 145,0.7)
            )!important;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }

</style>