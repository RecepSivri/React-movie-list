import { useState, useEffect } from 'react';
import '../../App.css';
import { getMovies } from '../../services/Services';

function ComedyPage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const api = getMovies('Comedy');
    if(api){
      api.then((res: any) => {
          console.log(res)
      })
    }
  },[])
  return (
    <>
        Comedy Page Works
    </>
  );
}

export default ComedyPage;
