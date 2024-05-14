import { useState, useEffect } from 'react';
import '../../App.css';
import { getMovies } from '../../services/Services';

function FamilyPage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const api = getMovies('Family');
    if(api){
      api.then((res: any) => {
          console.log(res)
      })
    }
  },[])
  return (
    <>
        Family Page Works
    </>
  );
}

export default FamilyPage;
