import { useState, useEffect } from "react";
import "../../App.css";
import { getMovies } from "../../services/Services";
import { useTranslation } from "react-i18next";

interface IpropsHistoryPage {
  toastr: any;
}

function HistoryPage(props: IpropsHistoryPage) {
  const { toastr } = props;
  const { t } = useTranslation();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const api = getMovies("History");
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
  return <>History Page Works</>;
}

export default HistoryPage;
