import axios from 'axios'

export default axios.create({
  baseURL: 'https://www.amiiboapi.com/api/',
  timeout: 10000,
})
