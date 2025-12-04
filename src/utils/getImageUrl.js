const getImageUrl = (imagePath) => {
  return new URL("../public/assets/movie-covers/" + imagePath, import.meta.url)
    .href;
};
export default getImageUrl;
