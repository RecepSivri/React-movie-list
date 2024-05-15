import { useState, useEffect } from 'react';
import '../../App.css';
import { getMovies } from '../../services/Services';

interface IpropsDramPage{
  toastr: any
}

function DramPage(props: IpropsDramPage) {

  const {toastr} = props;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const api = getMovies('Drama');
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
        Dram Page Works
    </>
  );
}

export default DramPage;
