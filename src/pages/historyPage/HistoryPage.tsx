import { useState, useEffect } from 'react';
import '../../App.css';
import { getMovies } from '../../services/Services';

function HistoryPage() {

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
        History Page Works
    </>
  );
}

export default HistoryPage;
