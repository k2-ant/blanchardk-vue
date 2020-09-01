<template>
    <div class="row p-1">
        <div class="col">
            <div class="portrait d-inline-flex">
                <img :src="img"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        img: String
    }
}
</script>

<style>
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
</style>