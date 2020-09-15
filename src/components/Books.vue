<template>
    <div class="row justify-content-md-center m-2">
        <div class="col d-flex" v-if="loading">
            <div class="loader mx-auto"></div>
        </div>
        <div v-else class="col-md-3 col-sm-12" v-for="(book, index) in books" :key="index">
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
        this.loading = true
        axios.get('https://us-central1-blanchardk-5bac3.cloudfunctions.net/api/getUserInfo/1036582')
        .then( (response) => {
            this.books = []
            this.loading = false
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
            loading: null,
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
.loading-message {
    color: white;
    font-weight: bold;
}
.loader {
  border: 12px solid #f3f3f357; /* Light grey */
  border-top: 12px solid #32323e; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>