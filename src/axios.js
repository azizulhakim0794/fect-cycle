import axios from "axios"
const instance = axios.create({
    baseURL:"https://stormy-meadow-96914.herokuapp.com"
})
export default instance;