import { useState, useEffect } from 'react';
import '../../App.css';
import { getMovies } from '../../services/Services';

function AdventurePage() {

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const api = getMovies('History');
    if(api){
      api.then((res: any) => {
          console.log(res)
      })
    }
  },[])
  return (
    <>
        AdventurePage Page Works
    </>
  );
}

export default AdventurePage;
