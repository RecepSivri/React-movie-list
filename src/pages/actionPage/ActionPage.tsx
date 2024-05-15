import { useState, useEffect } from 'react';
import '../../App.css';
import { getMovies } from '../../services/Services';
import { useTranslation } from 'react-i18next';

interface IpropsActionPage{
  toastr: any
}

function ActionPage(props: IpropsActionPage) {
  const {toastr} = props;
  const [movies, setMovies] = useState([]);
  const { t } = useTranslation();
  useEffect(() => {
    const api = getMovies('Action');
    if(api){
      api.then((res: any) => {
          console.log(res)
      }, (err: any) => {
        toastr('error', t('Sistem Hatası'), t('Veriler yüklenirken hata oluştu lütfen tekrar deneyiniz!'));
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
