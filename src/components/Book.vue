<template>
    <div class="book mb-5">
        <!-- <div class="row">
            <div class="col">
                <img :src="img" :alt="title" class="book-cover" />
            </div>
        </div>
        <div class="row">
            <div class="col mt-3">
                <span class="book-title">{{ title }}</span>
            </div>
        </div>
        <div class="row">
            <div class="col mb-3">
                <span class="book-author">{{ author }}</span>
            </div>
        </div> -->
        <div class="row no-gutters">
            <div class="col-5 m-0">
                <span class="book-title">
                    {{ title }}
                </span>
                <span class="book-author">
                    {{ author }}
                </span>
            </div>
            <div class="col-7">
                <span class="book-description" v-html="action">
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : { 
        title: String,
        author: String,
        img: String,
        description: String,
        action: String
    }
}
</script>

<style>

    .book {
        border-radius: 2%;
        box-shadow: 0px 0px 10px rgb(0,0,0,0.5);
        background: white;
        padding: 1em;
        height: 100%
    }

    /* .book-cover {
        width: 100%;
    } */

    .book-cover {
        float: left;
    }

    .book-title {
        font-size: 1.5em;
        font-weight: bold;
        color: #32323e;
        margin-bottom: 0;
        padding-bottom: 0;
        display: block;
    }

    .book-author {
        font-size: 0.8em;
        margin-top: 0;
        padding-top: 0;
        color: #777777;
        display: block;
    }

    .book-description {
        font-size: 0.8em;
    }

    .book-description a {
        color: #777777;
    }

    .book-description a:hover {
        color: #32323e;
        font-weight: bold;
        text-decoration: none;
    }

</style>