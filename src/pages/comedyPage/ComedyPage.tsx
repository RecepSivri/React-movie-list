import { useState, useEffect } from 'react';
import '../../App.css';
import { getMovies } from '../../services/Services';

interface IpropsComedyPage{
  toastr: any
}

function ComedyPage(props: IpropsComedyPage) {
  const {toastr} = props;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const api = getMovies('Comedy');
    if(api){
      api.then((res: any) => {
          console.log(res)
      }, (err: any) => {
        toastr('error', 'Sistem Hatası', 'Veriler yüklenirken hata oluştu lütfen tekrar deneyiniz!');
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
