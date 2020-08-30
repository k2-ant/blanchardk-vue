<template>
    <div class="container-fluid masthead min-vh-100">
        <Nav />
        <h1>What I'm Thinking</h1>
        <h5>Or what I've thought..</h5>
        <div v-for="(post, index) in posts" :key="posts.slug + '_' + index">
            <router-link :to="'/blog/' + post.slug">
            {{ post.title }}
            </router-link>
            {{ post.summary }}
        </div>
    </div>
</template>
<script>
import Nav from '../components/Nav.vue'
import { butter } from '@/gateways/buttercms'

export default {
    name: 'Blog',
    components: {
        Nav
    },
    data: function() {
        return {
            posts: []
        }
    },
    methods: {
        getPosts() {
            butter.post.list({
                page: 1,
                page_size: 10,
            }).then(res => {
                this.posts = res.data.data
            })
        }
    },
    created() {
        this.getPosts()
    }
}
</script>

<style>

</style>