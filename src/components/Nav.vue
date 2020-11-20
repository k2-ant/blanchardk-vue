<template>
    <div id="nav">
        <!-- <nav class="navbar navbar-expand-lg navbar-light bg-none" id="desktop-nav">
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
        </nav> -->
        <nav class="navbar navbar-light bg-none d-inline-block" id="mobile-nav">
            <ul class="nav-container-mobile">
                <li class="nav-item-mobile">
                    <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item-mobile">
                    <router-link :to="{ name: 'Books' }" class="nav-link">Shelf</router-link>
                </li>
                <li class="nav-item-mobile">
                    <a href="https://blog.kblanchard.com" class="nav-link">Blog</a>
                    <!-- <router-link :to="{ name: 'Blog' }" class="nav-link">Thoughts</router-link> -->
                </li>
            </ul>
        </nav>

  </div>
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
        box-shadow: black 1px 1px 1px 1px;
        background: rgb(256,256,256, 0.5);
        border-radius: 0.5em;
    }




    .nav-container-mobile {
        display: flex;
        margin: 0;
        padding: 1em 0 1em 0;
        justify-content: space-between;
        width: 100%;
        align-items: stretch;
    }

    .nav-item-mobile {
        display: inline-block;
        flex: 0 1 auto;
        list-style-type: none;
        margin-left: 0.5em;
        margin-right: 0.5em;
    }

    .nav-link {
        color: darkslategray;
    }

    .nav-link:hover {
        color: black;
        font-weight: bold;
        box-shadow: rgb(0,0,0,0.8) 1px 1px 1px 1px;
        border-radius: 0.5em;
    }

 


    

    

</style>