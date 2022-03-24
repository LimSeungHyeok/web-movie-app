import { Link } from "react-router-dom";

function MovieDetail({ title, coverImg, intro, full }) {
  return (
    <div>
      <h2>
        <Link to="/">뒤로</Link>
      </h2>
      <h2>{title}</h2>
      <img src={coverImg} alt="" />
      <h4>{intro}</h4>
      <p>{full}</p>
    </div>
  );
}

export default MovieDetail;
