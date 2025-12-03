import { useState } from "react";
import getImageUrl from "../utils/getImageUrl";
import Star from "./Star";
import MovieDetailsModal from "./MovieDetailsModal";

const MovieCart = ({ movie }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleCloseModal = () => {
    setToggleModal(false);
    setSelectedMovie(null);
  };

  const handleMovieSelection = (e) => {
    e.preventDefault();
    setSelectedMovie(movie);
    setToggleModal(true);
  };

  return (
    <>
      {toggleModal && (
        <MovieDetailsModal
          onClose={handleCloseModal}
          Selecdtedmovie={selectedMovie}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="" onClick={handleMovieSelection}>
          <img
            className="w-full object-cover"
            src={getImageUrl(movie.cover)}
            alt={"movie_cover"}
          />

          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <div class="flex items-center space-x-1 mb-5">
                <Star value={movie.rating} />
              </div>
            </div>
            <button
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
            >
              <img src="./assets/tag.svg" alt="" />
              <span>
                ${movie.price} |{" "}
                <span className="px-2 py-1 bg-[#00D991] rounded-md">
                  Add to Cart
                </span>
              </span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCart;
