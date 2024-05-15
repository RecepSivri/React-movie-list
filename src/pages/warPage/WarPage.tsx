import { useState, useEffect } from "react";
import "../../App.css";
import { getMovies } from "../../services/Services";
import { useTranslation } from "react-i18next";

interface IpropsWarPage {
  toastr: any;
}

function WarPage(props: IpropsWarPage) {
  const { toastr } = props;
  const [movies, setMovies] = useState([]);
  const { t } = useTranslation();
  useEffect(() => {
    const api = getMovies("War");
    if (api) {
      api.then(
        (res: any) => {
          console.log(res);
        },
        (err: any) => {
          toastr(
            "error",
            t("Sistem Hatası"),
            t("Veriler yüklenirken hata oluştu lütfen tekrar deneyiniz!"),
          );
        },
      );
    }
  }, []);
  return <>WarPage Page Works</>;
}

export default WarPage;
