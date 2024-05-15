import { useState, useEffect } from 'react';
import '../../App.css';
import { getMovies } from '../../services/Services';

interface IpropsFamilyPage{
  toastr: any
}

function FamilyPage(props: IpropsFamilyPage) {
  const [movies, setMovies] = useState([]);
  const {toastr} = props;
  useEffect(() => {
    const api = getMovies('Family');
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
        Family Page Works
    </>
  );
}

export default FamilyPage;
