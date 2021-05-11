import axios from "axios";

const instance = axios.create({
    baseURL: "https://hoblist.com/movieList" // the api (cloud function) URL

});

export default instance;