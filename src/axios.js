import axios from "axios"
const instance = axios.create({
    baseURL:"http://localhost:5000"
    // baseURL:"https://stormy-meadow-96914.herokuapp.com"
})
export default instance;