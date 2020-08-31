<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-none" id="nav">
    <div class="order-0">
        <router-link class="navbar-brand" :to="{ name: 'Home'}"><img height="30" src="../../public/img/logo.jpg"></router-link>
    </div>
    <ul class="navbar-nav justify-content-end ml-auto">
        <li class="nav-item">
            <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link :to="{ name: 'Books' }" class="nav-link">Bookshelf</router-link>
        </li>
        <li class="nav-item">
            <router-link :to="{ name: 'Blog' }" class="nav-link">Thoughts</router-link>
        </li>
    </ul>
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
        font-weight: bold !important;
    }

    

</style>