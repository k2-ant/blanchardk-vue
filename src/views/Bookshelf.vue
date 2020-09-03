<template>
<div class="container-fluid masthead min-vh-100">
    <Nav />
    <CirclePicture img="/img/my-main-photo.jpg" />
    <div class="row">
            <div class="col">
                    <div class="callout">
                    <h1 class="m-0">What I'm reading</h1>
                    <!-- <p class="job-title">Powered by 
                        <a href="https://buttercms.com/" target="_blank">
                            <img class="butter-logo pl-0" src="/img/butter-y.png" />
                        </a>
                        </p> -->
                </div>
            </div>
        </div>  
    <Books />
</div>
</template>

<script>
import Books from '@/components/Books.vue'
import Nav from '@/components/Nav.vue'
import CirclePicture from '@/components/CirclePicture.vue'


export default {
    components: {
        Books,
        Nav,
        CirclePicture
    }
}
</script>

<style>

</style>