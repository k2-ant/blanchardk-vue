<template>
    <div class="row justify-content-md-center m-5">
        <div class="col-md-6 col-sm-1" v-for="(book, index) in books" :key="index">
            <!-- To Do - Add Book Images? -->
            <Book :title="book.title" :author="book.author" :img ="book.img" />
        </div>
    </div>
</template>

<script>
const axios = require('axios')
import Book from '@/components/Book.vue'

export default {
    components:  {
        Book
    },
    created() {
        // change to the published URL.
        axios.get('http://localhost:5001/blanchardk-5bac3/us-central1/api/getUserInfo/1036582')
        .then( (response) => {
            this.books = []
            console.log(response)
            response.data.updates.update.forEach( (update) => {
                // only pull updates where I've updated readstatus, and updated to currently reading.
                // this is just because my request is so specific, any variance creates errors.
                if(update.type == "readstatus" && update.object.read_status.status == "currently-reading") {
                    let book_title = update.object.read_status.review.book.title
                    // All these books have increidble long subtitles. Seems like it is commonly seperated by hyphen.
                    book_title = book_title.substring(0, book_title.indexOf(":"))
                    let book_author = update.object.read_status.review.book.author.name
                    let book_img = 'https://via.placeholder.com/100'
                    this.books.push({
                        title : book_title,
                        author : book_author,
                        img: book_img
                    })
                }
            })
        })
        .catch( (error) => {
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