<template>
    <div class="row no-gutters">
        <div class="col center-block">

            <CirclePicture img="/img/my-main-photo.jpg" />

            <div class="row p-0">
                <div class="col">
                        <div class="callout">
                        <h1 class="m-0">Kyle Blanchard</h1>
                       <p class="job-title">Product Manager passionate for learning, adventure, and growth.</p>
                    </div>
            </div></div>

            <div class="row p-0">
                <div class="col">
                    <div class="">
                <ul class="myshit">
                    <!--<li>Read my stuff</li>
                    <li>Check out my photos</li>-->
                    <li><a href="https://www.linkedin.com/in/kyle-blanchard/" target="_blank">
                        <img src="/img/linkedin.png" class="logo" />    
                    </a></li>
                    <li><a href="https://github.com/k2-ant" target="_blank">
                        <img src="/img/github.png" class="logo"  />                        
                    </a></li>
                    <li><a href="mailto:blanchardk@gmail.com">
                        <img src="/img/email.png" class="logo"  />        
                    </a></li>
                </ul>
            </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CirclePicture from '@/components/CirclePicture.vue'
export default {
    components: {
        CirclePicture
    }
}
</script>

<style>

    h1 {
        font-weight: 900;
    }

    .portrait img {
        height: 100%;
        position: relative;
        margin-left: -50px;
    }

    .job-title {
        vertical-align: middle;
        font-size: 0.8em;
        color:darkslategray;
    }

    .myshit {
        list-style-type: none;
        font-size: 0.8em;
        padding: 0;
        margin: 0;
    }

    .myshit a {
        color: #32323e
    }

    .myshit a:hover {
        color: #000000;
        text-decoration: none;
        font-weight: bold;
    }

    .myshit li {
        display: inline-block;
    }

    .work-logo {
        width: 7em;
    }

    .logo {
        width: 24px;
        margin: 0 1em 0 1em;
    }

</style>