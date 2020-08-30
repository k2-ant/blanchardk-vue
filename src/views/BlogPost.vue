<template>
    <div class="container-fluid masthead min-vh-100">
        <Nav />
        <div class="row blog-post">
            <div class="col">
                <h1>{{ post.data.title }}</h1>
                <h4>{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4>
                <div v-html="post.data.body"></div>

                <router-link
                v-if="post.meta.previous_post"
                :to="/blog/ + post.meta.previous_post.slug"
                class="button"
                >
                {{ post.meta.previous_post.title }}
                </router-link>
                <router-link
                v-if="post.meta.next_post"
                :to="/blog/ + post.meta.next_post.slug"
                class="button"
                >
                {{ post.meta.next_post.title }}
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

.blog-post {
    background: #ffffff;
    margin: 2em 2em 0em 2em;
    padding: 5em;
    border-radius: 1em;
}

.blog-post img {
    max-width: 100%;
}

</style>