import { useEffect, useState } from 'react';
import '../../App.css';
import {getTrends} from "../../services/Services"

interface IpropsMainPage{
  toastr: any
}
function MainPage(props: IpropsMainPage) {
  const {toastr} = props;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
      getTrends().then((res: any) => {
          console.log(res)
      }, (err: any) => {
        toastr('error', 'Sistem Hatası', 'Veriler yüklenirken hata oluştu lütfen tekrar deneyiniz!');
      });
  },[])
  return (
    <>
        Main Page Works
    </>
  );
}

export default MainPage;
