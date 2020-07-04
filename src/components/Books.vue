<template>
    <div class="row justify-content-md-center m-5 p-5">
        <div class="col-4" v-for="(book, index) in books" :key="index">
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
                    title : "White Fragility",
                    author: "Robin Diangelo",
                    img: "/img/white-fragility.jpeg"
                },
                {
                    title : "A Man of Letters",
                    author: "Thomas Sowell",
                    img: "/img/a-man-of-letters.jpg"
                },
                {
                    title : "A Man of Letters",
                    author: "Thomas Sowell",
                    img: "/img/a-man-of-letters.jpg"
                },
                {
                    title : "A Man of Letters",
                    author: "Thomas Sowell",
                    img: "/img/a-man-of-letters.jpg"
                },
                {
                    title : "A Man of Letters",
                    author: "Thomas Sowell",
                    img: "/img/a-man-of-letters.jpg"
                },
                {
                    title : "A Man of Letters",
                    author: "Thomas Sowell",
                    img: "/img/a-man-of-letters.jpg"
                },
                {
                    title : "A Man of Letters",
                    author: "Thomas Sowell",
                    img: "/img/a-man-of-letters.jpg"
                },
                {
                    title : "A Man of Letters",
                    author: "Thomas Sowell",
                    img: "/img/a-man-of-letters.jpg"
                },
                {
                    title : "A Man of Letters",
                    author: "Thomas Sowell",
                    img: "/img/a-man-of-letters.jpg"
                }
            ]
        }
    }
}
</script>

<style>

</style>