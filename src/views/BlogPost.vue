<template>
    <div class="container-fluid masthead">
        <Nav />
        <div class="row">
            <div class="col">
                <router-link :to="{name : 'Blog'}" class="float-left back">← Go Back</router-link>
            </div>
        </div>
        <!-- <img v-bind:src="post.data.featured_image" class="post-banner" /> -->
        <div class="row">
            <div class="col">
                <h1>{{ post.data.title }}</h1>
                <h4>{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4>
            </div>
        </div>

        <div class="row no-gutters blog-post shadow">
            <div class="col">

                <div v-html="post.data.body"></div>

                <router-link
                v-if="post.meta.previous_post"
                :to="/blog/ + post.meta.previous_post.slug"
                class="button"
                >
                Previous Post
                </router-link>
                <router-link
                v-if="post.meta.next_post"
                :to="/blog/ + post.meta.next_post.slug"
                class="button"
                >
                Next Post
                </router-link>
            </div>
        </div>
        
    </div>
</template>

<script>
import { butter } from '@/gateways/buttercms'
import Nav from '../components/Nav.vue'


export default {
    name: 'BlogPost',
    components: {
        Nav
    },
    data: function() {
        return {
            post: {}
        }
    },
    methods: {
        getPost() {
            butter.post.retrieve(this.$route.params.slug)
            .then(res => {
                this.post = res.data
            }).catch(res => {
                console.log(res)
            })
        }
    },
    created() {
        this.getPost()
    }
    
}
</script>

<style>

.post-banner {
    height: 12em;
}

.back {
    margin: 1em 0em 0em 2em;
    font-weight: bold;
    color: darkslategray;
    cursor: pointer;
}

.back:hover {
    color: black;
    text-decoration: none;
}

.blog-post {
    background: #ffffff;
    margin: 1em 2em 2em 2em;
    padding: 5em 5em 5em 5em;
    border-radius: 1em;
    /* text-align: left; */
    box-shadow: 0px 0px 20px rgb(0,0,0,0.2);
    z-index: 1;
}

.blog-post img {
    max-width: 100%;
}

</style>