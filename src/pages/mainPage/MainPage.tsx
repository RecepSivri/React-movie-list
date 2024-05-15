import { useEffect, useState } from "react";
import "../../App.css";
import { getTrends } from "../../services/Services";
import { useTranslation } from "react-i18next";

interface IpropsMainPage {
  toastr: any;
}
function MainPage(props: IpropsMainPage) {
  const { toastr } = props;
  const [movies, setMovies] = useState([]);
  const { t } = useTranslation();
  useEffect(() => {
    getTrends().then(
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
  }, []);
  return <>Main Page Works</>;
}

export default MainPage;
