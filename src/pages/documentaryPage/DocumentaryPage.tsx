import { useState, useEffect } from 'react';
import '../../App.css';
import { getMovies } from '../../services/Services';
import { useTranslation } from 'react-i18next';

interface IpropsDocumentaryPage{
  toastr: any
}

function DocumentaryPage(props: IpropsDocumentaryPage) {
  const {toastr} = props;
  const [movies, setMovies] = useState([]);
  const { t } = useTranslation();
  useEffect(() => {
    const api = getMovies('Documentary');
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
        Documentary Page Works
    </>
  );
}

export default DocumentaryPage;
