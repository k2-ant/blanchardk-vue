<template>
    <div class="row no-gutters">
        <div class="col center-block">

            <div class="row p-1">
                <div class="col">
                    <div class="portrait d-inline-flex">
                        <img src="/img/my-main-photo.jpg"/>
                    </div>
                </div>
            </div>

            <div class="row p-1">
                <div class="col">
                        <div class="callout">
                        <h1>Kyle Blanchard</h1>
                        <p>Product Manager @ Experian</p>
                    </div>
            </div></div>

            <div class="row">
                <div class="col">
                    <div class="">
                <ul class="myshit">
                    <!--<li>Read my stuff</li>
                    <li>Check out my photos</li>-->
                    <li><a href="https://www.linkedin.com/in/kyle-blanchard/" target="_blank">Examine my career</a></li>
                    <li><a href="https://github.com/k2-ant" target="_blank">Explore some projects</a></li>
                    <li><a href="mailto:blanchardk@gmail.com">Contact me</a></li>
                </ul>
            </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

    h1 {
        font-weight: 900;
    }

    .portrait {
        position:relative;
        width: 200px;
        height: 200px;
        overflow: hidden;
        border-radius: 50%;
        align-content: center;
        border: 5px solid #32323e;
        box-shadow: 0px 0px 10px #32323e;
        
    }

    .portrait:hover {
        box-shadow: 0px 0px 12px #32323e;
    }

    .portrait img {
        height: 100%;
        position: relative;
        margin-left: -50px;
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

</style>