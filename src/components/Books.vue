<template>
    <div class="row justify-content-md-center pb-5 ml-5 mr-5 mt-5">
        <div class="col-md-3 col-sm-1" v-for="(book, index) in books" :key="index">
            <Book :title="book.title" :author="book.author" :img ="book.img" />
        </div>
    </div>
</template>

<script>
import { gr } from '@/gateways/goodreads.js'
import Book from '@/components/Book.vue'

export default {
    components:  {
        Book
    },
    created() {
            gr.getUserInfo('1036582')
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    data : function() {
        return {
            books: [
                {
                    title : "Naked Statistics",
                    author: "Charles Wheelan",
                    img: "/img/naked-statistics.jpg"
                },
                {
                    title : "How Will You Measure Your Life?",
                    author: "Clayton M. Christensen",
                    img: "/img/how-will-you-measure-your-life.jpg"
                },
                {
                    title : "Lord of the Rings",
                    author: "J.R.R Tolkien",
                    img: "/img/lord-of-the-rings.jpg"
                },
                {
                    title : "Good to Great",
                    author: "Jim Collins",
                    img: "/img/good-to-great.jpg"
                }
            ]
        }
    }
}
</script>

<style>

</style>