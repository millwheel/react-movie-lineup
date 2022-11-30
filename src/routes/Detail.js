import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    console.log(json);
    setDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={detail.background_image_original} />
          <h1>{detail.title}</h1>
          <p>{detail.description_full}</p>
          <ul>rating: {detail.rating}</ul>
          <ul>download: {detail.download_count}</ul>
          <ul>year: {detail.year}</ul>
        </div>
      )}
    </div>
  );
}
export default Detail;
