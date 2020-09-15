<template>
    <div class="row justify-content-md-center m-5">
        <div class="col-md-6 col-sm-1" v-for="(book, index) in books" :key="index">
            <!-- To Do - Add Book Images? -->
            <Book 
                :title="book.title" 
                :author="book.author" 
                :img ="book.img" 
                :description="book.description"
                :action="book.action"
                />
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
        axios.get('https://us-central1-blanchardk-5bac3.cloudfunctions.net/api/getUserInfo/1036582')
        .then( (response) => {
            this.books = []
            response.data.updates.update.forEach( (update) => {
                // only pull updates where I've updated readstatus, and updated to currently reading.
                // this is just because my request is so specific, any variance creates errors.
                if(update.type == "readstatus" && update.object.read_status.status == "currently-reading") {
                    // let book_id = update.object.read_status.review.book.id._
                    let book_title = update.object.read_status.review.book.title
                    // All these books have increidble long subtitles. Seems like it is commonly seperated by hyphen.
                    book_title = book_title.substring(0, book_title.indexOf(":"))
                    let book_author = update.object.read_status.review.book.author.name
//                    let book_img = this.getBookImg(book_id)
                    let book_img = 'https://via.placeholder.com/100'
                    let book_description = update.object.read_status.review.book.description
                    let last_action = "Kyle " + update.action_text
                    this.books.push({
                        title : book_title,
                        author : book_author,
                        img: book_img,
                        description: book_description,
                        action: last_action
                    })
                }
            })
        })
        .catch( (error) => {
            console.log(error)
        })
    },
    methods: {
         getBookImg(book_id) {
            axios.get("us-central1-blanchardk.5bac3.cloudfunctions.net/api/getBook/" + book_id)
            .then( (response) => {
                let img_url = response.data.book.image_url
                return img_url
            })
            .catch( (error) => {
                console.log(error)
                return 'https://via.placeholder.com/100'
            })
        }
    },
    data : function() {
        return {
            books: [
                // {
                //     title : "Naked Statistics",
                //     author: "Charles Wheelan",
                //     img: "/img/naked-statistics.jpg"
                // },
                // {
                //     title : "How Will You Measure Your Life?",
                //     author: "Clayton M. Christensen",
                //     img: "/img/how-will-you-measure-your-life.jpg"
                // },
                // {
                //     title : "Lord of the Rings",
                //     author: "J.R.R Tolkien",
                //     img: "/img/lord-of-the-rings.jpg"
                // },
                // {
                //     title : "Good to Great",
                //     author: "Jim Collins",
                //     img: "/img/good-to-great.jpg"
                // }
            ]
        }
    }
}
</script>

<style>

</style>