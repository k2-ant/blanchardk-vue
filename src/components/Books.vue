<template>
    <div class="row justify-content-md-center pb-5 ml-5 mr-5 mt-5">
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
                    title : "Lord of the Rings",
                    author: "J.R.R Tolkien",
                    img: "/img/lord-of-the-rings.jpg"
                },
                {
                    title : "Building Products for the Enterprise",
                    author: "Blair Reeves & Benjamin gaines",
                    img: "/img/building-products-for-an-enterprise.jpg"
                }
            ]
        }
    }
}
</script>

<style>

</style>