import { useState, useEffect } from 'react';
import '../../App.css';
import { getMovies } from '../../services/Services';

interface IpropsHorrorPage{
  toastr: any
}
function HorrorPage(props: IpropsHorrorPage) {

  const {toastr} = props;

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const api = getMovies('Horror');
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
        Horror Page Works
    </>
  );
}

export default HorrorPage;
