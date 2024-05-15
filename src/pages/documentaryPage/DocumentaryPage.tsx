import { useState, useEffect } from 'react';
import '../../App.css';
import { getMovies } from '../../services/Services';

interface IpropsDocumentaryPage{
  toastr: any
}

function DocumentaryPage(props: IpropsDocumentaryPage) {
  const {toastr} = props;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const api = getMovies('Documentary');
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
        Documentary Page Works
    </>
  );
}

export default DocumentaryPage;
