<template>
    <div class="row justify-content-md-center m-5">
        <div class="col-md-3 col-sm-1" v-for="(book, index) in books" :key="index">
            <Book :title="book.title" :author="book.author" :img ="book.img" />
        </div>
    </div>
</template>

<script>
import Book from '@/components/Book.vue'

export default {
    components:  {
        Book
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