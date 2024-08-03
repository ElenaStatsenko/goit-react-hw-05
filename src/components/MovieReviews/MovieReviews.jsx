import { useEffect, useState } from "react";
import { fetchMovieRewiew } from "../../api";
import { useParams } from "react-router-dom";
export default function MovieReviews() {
  const { id } = useParams();

  const [moviesReview, setMovieReview] = useState(null);

  useEffect(() => {
    const getMovieReview = async () => {
      const data = await fetchMovieRewiew(id);
      setMovieReview(data);
      console.log(data)
    };
    getMovieReview();
  }, [id]);
  return (
   
    <>
      {moviesReview ? (
        <ul>
          {moviesReview.map(({ id, content }) => (
            <li key={id}>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>Нет данных о рецензиях</div>
      )}
    </>
  );
}
