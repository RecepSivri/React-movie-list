import { useState, useEffect } from 'react';
import '../../App.css';
import { getMovies } from '../../services/Services';

function DocumentaryPage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const api = getMovies('Documentary');
    if(api){
      api.then((res: any) => {
          console.log(res)
      })
    }
  },[])
  return (
    <>
        Documentary Page Works
    </>
  );
}

export default DocumentaryPage;
