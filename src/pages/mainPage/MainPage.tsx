import { useEffect, useState } from 'react';
import '../../App.css';
import {getTrends} from "../../services/Services"

function MainPage() {

  const [movies, setMovies] = useState([]);
  useEffect(() => {
      getTrends().then((res: any) => {
          console.log(res)
      });
  },[])
  return (
    <>
        Main Page Works
    </>
  );
}

export default MainPage;
