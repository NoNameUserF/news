import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_NEWS_URL
const apiKey = import.meta.env.VITE_NEWS_API_KEY

export const getNews =async  (page_number = 1  , page_size = 10)  => {
    try {
        const response  = await axios.get(`${baseURL}search`, {
            params : {
                apiKey : apiKey,
                page_number ,
                page_size
            }
        })
        console.log(response.data.news)
        return  await response.data
    }catch (error) {
        console.log(error)
    }
}
