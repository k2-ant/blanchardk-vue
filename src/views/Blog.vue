<template>
    <div class="container-fluid masthead min-vh-100">
        <Nav />
        <CirclePicture img="/img/my-main-photo.jpg" />
        <div class="row">
            <div class="col">
                    <div class="callout">
                    <h1 class="m-0">What I'm thinking</h1>
                    <p class="job-title">Powered by 
                        <a href="https://buttercms.com/" target="_blank">
                            <img class="butter-logo pl-0" src="/img/butter-b.png" />
                        </a>
                        </p>
                </div>
            </div>
        </div>       
        <div class="row m-3 mb-5">
            <div class="col-sm-12 col-md-6 col-lg-4" v-for="(post, index) in posts" :key="posts.slug + '_' + index">
                <div class="card blog-card">
                    <img class="card-img" :src="post.featured_image">

                    <div class="card-body">
                        <h4 class="card-title">
                            <router-link :to="'/blog/' + post.slug"> 
                                {{ post.title }}
                            </router-link>
                        </h4>

                        <p class="card-text">
                            {{ post.summary }}
                        </p>
                    </div>
                    <div class="card-footer text-muted small bg-transparent border-top-0">
                        <div class="views">
                            {{ post.published | formatDate }}
                        </div>
                    <!-- <div class="stats">
                            <i class="far fa-eye"></i> 1347
                            <i class="far fa-comment"></i> 12
                        </div>  -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Nav from '../components/Nav.vue'
import CirclePicture from '../components/CirclePicture.vue'
import { butter } from '@/gateways/buttercms'

export default {
    name: 'Blog',
    components: {
        Nav,
        CirclePicture
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
                console.log(res.data.data)
            })
        }
    },
    created() {
        this.getPosts()
    }
}
</script>

<style>
.butter-logo {
    width: 10em;
}

.blog-card {
    height: 100%;
}
</style>