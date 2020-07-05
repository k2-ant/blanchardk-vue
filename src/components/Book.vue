<template>
    <div class="book mb-5">
        <div class="row">
            <div class="col">
                <img :src="img" :alt="title" class="book-cover" />
            </div>
        </div>
        <!-- <div class="row">
            <div class="col mt-3">
                <span class="book-title">{{ title }}</span>
            </div>
        </div>
        <div class="row">
            <div class="col mb-3">
                <span class="book-author">{{ author }}</span>
            </div>
        </div> -->
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
        border-radius: 2%;
        box-shadow: 0px 0px 10px rgb(0,0,0,0.5);
    }

    .book-cover {
        width: 100%;
    }

    .book-title {
        font-size: 1.5em;
        font-weight: bold;
        color: #32323e;
        margin-bottom: 0;
        padding-bottom: 0;
    }

    .book-author {
        font-size: 0.8em;
        margin-top: 0;
        padding-top: 0;
        color: #777777
    }

</style>