import { useState, useEffect } from 'react';
import '../../App.css';
import { getMovies } from '../../services/Services';

interface IpropsActionPage{
  toastr: any
}

function ActionPage(props: IpropsActionPage) {
  const {toastr} = props;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const api = getMovies('Action');
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
        Action Page Works
    </>
  );
}

export default ActionPage;
