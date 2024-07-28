import { useEffect, useState } from "react";
import { fetchMovieDetails,  } from "../../api";
import { useParams } from 'react-router-dom';

      
export default function MovieDetailsPage() {
    const { id } = useParams();
    const [moviesDetails, setMoviesDetais] = useState(null);
    useEffect(() => {
      const getMoviesDetais= async () => {
        const data = await fetchMovieDetails(id);
        setMoviesDetais(data);
      };
      getMoviesDetais();
    }, []);
    return <div>Обзор фильма</div>;
  }
  


  