import { useState, useEffect } from 'react';
import '../../App.css';
import { getMovies } from '../../services/Services';

function ActionPage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const api = getMovies('Action');
    if(api){
      api.then((res: any) => {
          console.log(res)
      })
    }
  },[])
  return (
    <>
        Action Page Works
    </>
  );
}

export default ActionPage;
