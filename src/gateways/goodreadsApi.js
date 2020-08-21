import axios from 'axios'

// this API didn't work out.
export default axios.create({
    baseURL: "http://www.goodreads.com/review/",
    timeout: 5000,
    headers: {
        'X-Auth-Token': 'Dmy6VO6z7h2JqGewLlEblP3mZurrHlJAEVRP4SteSBI',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
})