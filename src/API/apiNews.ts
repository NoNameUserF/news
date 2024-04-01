import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_NEWS_URL
const apiKey = import.meta.env.VITE_NEWS_API_KEY

export const getNews =async  ()  => {
    try {
        const response  = await axios.get(`${baseURL}latest-news`, {
            params : {
                apiKey : apiKey
            }
        })
        console.log(response.data.news)
        return  await response.data
    }catch (error) {
        console.log(error)
    }
}
