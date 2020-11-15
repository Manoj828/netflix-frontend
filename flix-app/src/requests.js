const API_KEY='a3f62f5971cd5dd6657cca3000aab9e5'
//api.themoviedb.org/3

const requests={
   fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
   fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
   fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
   fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
   fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
   fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
   fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
   fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,

}

export default requests



