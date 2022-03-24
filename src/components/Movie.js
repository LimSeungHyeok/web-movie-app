import { Link } from "react-router-dom";

function Movie({ id, title, coverImg, summary, genres }) {
  return (
    <div>
      <h2>
        <Link to={`/detail/${id}`}>{title}</Link>
      </h2>
      <img src={coverImg} alt="" />
      <p>{summary}</p>
    </div>
  );
}

export default Movie;
