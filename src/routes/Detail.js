import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div>
          <img className={styles.bg} src={detail.background_image_original} />
          <div className={styles.content}>
            <img className={styles.img} src={detail.medium_cover_image} />
            <div className={styles.text_box}>
              <h1 className={styles.title}>{detail.title}</h1>
              <p className={styles.paragraph}>{detail.description_full}</p>
              <div className={styles.else}>
                <ul>rating: {detail.rating} / 10</ul>
                <ul>download: {detail.download_count}</ul>
                <ul>year: {detail.year}</ul>
              </div>
              <a className={styles.link} href={detail.url}>
                Go to Website
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
