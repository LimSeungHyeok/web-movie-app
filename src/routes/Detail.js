import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const getMovieDetail = async () => {
    const result = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await result.json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovieDetail();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <MovieDetail
          title={movie.title}
          coverImg={movie.medium_cover_image}
          intro={movie.description_intro}
          full={movie.description_full}
        />
      )}
    </div>
  );
}

export default Detail;
