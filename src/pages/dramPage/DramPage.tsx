import { useState, useEffect } from 'react';
import '../../App.css';
import { getMovies } from '../../services/Services';

function DramPage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const api = getMovies('Drama');
    if(api){
      api.then((res: any) => {
          console.log(res)
      })
    }
  },[])
  return (
    <>
        Dram Page Works
    </>
  );
}

export default DramPage;
