const getImageUrl = (imagePath) => {
  return new URL(`../assets/movie-covers/${imagePath}`, import.meta.url).href;
};
export default getImageUrl;
