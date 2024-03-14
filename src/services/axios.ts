import axios from 'axios'
import { BASE_URL } from '@/constants/environment'

// Makes a GET request using the axios library, and returns the response. It takes a URL and optional query parameters as input.
const getRequest = async <T>(url: string, queryParams?: object) => {
  const response = await axios.get<T>(`${BASE_URL}/${url}`, {
    params: queryParams
  })
  return response
}

export { getRequest }
