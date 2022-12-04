import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, rating, genres }) {
  return (
    <div className={styles.movie}>
      <div className={styles.movie_img_box}>
        <Link to={`/movie/${id}`}>
          <img src={coverImg} alt={title} className={styles.movie_img} />
          <span className={styles.movie_rating}>{`★${rating}/10`}</span>
        </Link>
      </div>
      <h2 className={styles.movie_title}>{title}</h2>
      <div className={styles.movie_genres}>
        {genres.map((genre) => (
          <ul key={genre}>{genre}</ul>
        ))}
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
