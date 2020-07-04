<template>
    <div class="book">
        <div class="row">
            <div class="col">
                <div class="cover-container">
                    <img :src="img" class="book-cover" />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <span>{{ title }}</span>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <span>{{ author }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : { 
        title: String,
        author: String,
        img: String
    }
}
</script>

<style>
    .book {
        margin: 2em;
        background: 
            rgb(255,255,255,0.2);
        border: 1px solid white;
        border-radius: 2%;
        box-shadow: 0px 0px 10px black;
    }

    .book-cover {
        width: 100%;
    }

</style>