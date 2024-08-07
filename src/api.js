import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY
const baseUrl = process.env.React_APP_BASEURL

export const getMovieList = async () => {
    const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`)
    return movie.data.results
}

export const searchMovie = async (q) => {
    
        const search = await axios.get(`${baseUrl}/search/movie?query=query=${q}&api_key=?${apiKey}`);
        return search.data
    
};