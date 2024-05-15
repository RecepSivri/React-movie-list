import { useState, useEffect } from "react";
import "../../App.css";
import { getMovies } from "../../services/Services";
import { useTranslation } from "react-i18next";

interface IpropsFamilyPage {
  toastr: any;
}

function FamilyPage(props: IpropsFamilyPage) {
  const [movies, setMovies] = useState([]);
  const { toastr } = props;
  const { t } = useTranslation();
  useEffect(() => {
    const api = getMovies("Family");
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
  return <>Family Page Works</>;
}

export default FamilyPage;
