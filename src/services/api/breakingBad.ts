import axios from 'axios'

export const breakingBadApi = axios.create({
  baseURL: 'https://www.breakingbadapi.com/api/'
})