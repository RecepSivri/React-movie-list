import { useState, useEffect } from 'react';
import '../../App.css';
import { getMovies } from '../../services/Services';

interface IpropsWarPage{
  toastr: any
}

function WarPage(props: IpropsWarPage) {
  const {toastr} = props;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const api = getMovies('War');
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
        WarPage Page Works
    </>
  );
}

export default WarPage;
