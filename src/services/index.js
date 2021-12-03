import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com"
})

export const fakeStoreApi = {
  get(url) {
    return axiosInstance.get(url)
  }
}