import { useState, useEffect } from 'react';
import '../../App.css';
import { getMovies } from '../../services/Services';

function WarPage() {

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const api = getMovies('War');
    if(api){
      api.then((res: any) => {
          console.log(res)
      })
    }
  },[])
  return (
    <>
        WarPage Page Works
    </>
  );
}

export default WarPage;
