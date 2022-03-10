const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '25650357fdb5a7fd7fe59ccc6939fd60',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}
export default apiConfig