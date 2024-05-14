import { useState, useEffect } from 'react';
import '../../App.css';
import { getMovies } from '../../services/Services';

function HorrorPage() {

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const api = getMovies('Horror');
    if(api){
      api.then((res: any) => {
          console.log(res)
      })
    }
  },[])
  return (
    <>
        Horror Page Works
    </>
  );
}

export default HorrorPage;
