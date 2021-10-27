import axios from './index.js'

export function gettingArticle(){
    return axios.get("https://api.apiopen.top/getJoke?page=1&count=2&type=video")
}
