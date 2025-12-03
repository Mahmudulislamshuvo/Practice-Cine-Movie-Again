import { getAllMovies } from "../../data/movieData";
import MovieCart from "../MovieCart";

const Content = () => {
  const movieData = getAllMovies();
  return (
    <div>
      <div className="content">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {/* <!-- Begin Card --> */}
          {movieData.map((movie) => (
            <MovieCart key={movie.id} movie={movie} />
          ))}
          {/* <!-- End Card --> */}
        </div>
      </div>
    </div>
  );
};

export default Content;
