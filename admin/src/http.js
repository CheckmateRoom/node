import axios from 'axios'

const http = axios.create({
    baseURL : 'http://localhost:300/admin/api'
})

export default http