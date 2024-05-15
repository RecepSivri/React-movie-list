import { useState, useEffect } from "react";
import "../../App.css";
import { getMovies } from "../../services/Services";
import { useTranslation } from "react-i18next";

interface IpropsComedyPage {
  toastr: any;
}

function ComedyPage(props: IpropsComedyPage) {
  const { toastr } = props;
  const [movies, setMovies] = useState([]);
  const { t } = useTranslation();
  useEffect(() => {
    const api = getMovies("Comedy");
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
  return <>Comedy Page Works</>;
}

export default ComedyPage;
