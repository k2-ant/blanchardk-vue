<template>
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
        <!-- <div class="row no-gutters">
            <div class="col-md-5 col-sm-12 m-0">
                <span class="book-title">
                    {{ title }}
                </span>
                <span class="book-author">
                    {{ author }}
                </span>
            </div>
            <div class="col-md-7 col-sm-12">
                <span class="book-description" v-html="action">
                </span>
            </div>
        </div> -->
                <div class="card book">
                    <div class="card-body text-left">
                        <h5 class="card-title text-left">{{ title }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted text-left"> {{ author }}</h6>
                        <span class="card-text book-description text-left" v-html="action"></span>
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
        border-radius: 1em;
        box-shadow: 0px 0px 10px rgb(0,0,0,0.5);
        background: rgb(256,256,256,0.95);
        padding: 0em;
        height: 92%;
        padding-bottom: 1em;
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