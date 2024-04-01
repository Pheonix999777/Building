import { useTranslation } from "react-i18next";
import { Container } from "../../components/Container/Container";
import "./style.scss";

export const Page = () => {
  const { t } = useTranslation();

  return (
    <section className="page">
      <Container>
        <a className="anchor" id="page"></a>
        <h2 className="page-title"> {t("ourCompany")}</h2>
        <ul className="page-ul">
          <li className="page-list">
            <h3 className="page-box">
              <span className="page-number">120</span> +
            </h3>
            <p className="page-text">{t("employees")}</p>
          </li>

          <li className="page-list">
            <h3 className="page-box">
              <span className="page-number">43</span> +
            </h3>
            <p className="page-text">{t("objects")}</p>
          </li>

          <li className="page-list">
            <h3 className="page-box">
              <span className="page-number">250</span> +
            </h3>
            <p className="page-text">{t("special")}</p>
          </li>

          <li className="page-list">
            <h3 className="page-box">
              <span className="page-number">2</span> +
            </h3>
            <p className="page-text">{t("market")}</p>
          </li>
        </ul>
      </Container>
    </section>
  );
};
