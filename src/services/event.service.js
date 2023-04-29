import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/bonguynvan/vuemastery-course',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvent(){
        return apiClient.get('/events')
    }
}