import { getRequest } from "@/services/axios"

const fetchExample = async (queryParams?: object) => {
  const response = await getRequest<any[]>('example', queryParams)
  return response
}

export { fetchExample }
