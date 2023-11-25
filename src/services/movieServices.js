const key = import.meta.env.VITE_TMDB_KEY;
// base url endpoint 
const baseUrl = "https://api.themoviedb.org/3"


const endpoints={
    popular:`${baseUrl}/movie/popular?api_key=${key}`,
    topRates:`${baseUrl}/movie/top_rated?api_key=${key}`,
    trending:`${baseUrl}/movie/popular?api_key=${key}&language=en-US&page=2`,
    comedy:`${baseUrl}/search/movie/?api_key=${key}&language=en-USquery=comedy&page=1&include_adult=false`,
    upcoming:`${baseUrl}/movie/upcoming?api_key=${key}`,
};

export default endpoints