import { useEffect } from 'react';
import '../../App.css';
import {getMovies, getCategories} from "../../services/Services"
function MainPage() {

    useEffect(() => {
        getCategories('comedy').then((res: any) => {
            console.log(res)
        })
    },[])


  return (
    <>
        Main Page Works
    </>
  );
}

export default MainPage;
