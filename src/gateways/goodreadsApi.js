import axios from 'axios'

// this API didn't work out.
export default axios.create({
    baseURL: "http://www.goodreads.com/review/",
    timeout: 5000,
    headers: {
        'X-Auth-Token': '',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
})