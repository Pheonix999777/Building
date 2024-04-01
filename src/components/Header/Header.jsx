import React, { useContext } from "react";
import { Container } from "../Container/Container";
import { CustomDropdown } from "../CostumDropdown/Dropdown";
import logo from "../../assets/ataev2.563d9f6552a0ae9e7a2b.png";
import logo2 from "../../assets/ataev1.a8abd3c374603900fb01.png";
import { FiMenu } from "react-icons/fi";
import { FaPhone } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useHeaderProps } from "./useHeaderProps";
import { useTranslation } from "react-i18next";
import "./style.scss";
import { MainContext } from "../../modules/MainContext/MainContext";

export const Header = () => {
  const { change } = useContext(MainContext);
  const {
    dropdownValues,
    isSticky,
    selectedLanguage,
    handleShowNavbar,
    handleChangeLanguage,
    changeDropdownValue,
    showNavbar,
  } = useHeaderProps();

  const { t } = useTranslation();

  return (
    <header
      className={`header ${isSticky ? "sticky" : ""} ${
        change ? "header2" : ""
      }`}
    >
      <Container>
        <div className="header-box">
          <button id="menu" onClick={handleShowNavbar}>
            <FiMenu />
          </button>
          <a href="#">
            <img className="header-logo-hidden" src={logo2} alt="logo" />
          </a>
          <a className="header-icon-hidden" href="tel:+998935155040">
            <FaPhone />
          </a>
        </div>
        <nav className={`header-nav  ${showNavbar ? "active" : ""}`}>
          <button id="close" onClick={handleShowNavbar}>
            <IoClose />
          </button>
          <ul className="header-ul">
            <li className="header-list">
              <a
                className={isSticky ? "header-link-sticky" : "header-link"}
                href="#home"
                onClick={handleShowNavbar}
              >
                {t("home")}
              </a>
            </li>
            <li className="header-list">
              <a
                className={isSticky ? "header-link-sticky" : "header-link"}
                href="#projects"
                onClick={handleShowNavbar}
              >
                {t("about")}
              </a>
            </li>
            <li className="header-list">
              <a
                className={isSticky ? "header-link-sticky" : "header-link"}
                href="#page"
                onClick={handleShowNavbar}
              >
                {t("korxona")}
              </a>
            </li>
            {isSticky ? (
              <a href="#">
                <img className="header-logo" src={logo} alt="logo" />
              </a>
            ) : (
              <a href="#">
                <img className="header-logo" src={logo2} alt="logo" />
              </a>
            )}

            <li className="header-list">
              <a
                className={isSticky ? "header-link-sticky" : "header-link"}
                href="#"
                onClick={handleShowNavbar}
              >
                {t("faq")}
              </a>
            </li>
            <li className="header-list">
              <a
                className={isSticky ? "header-link-sticky" : "header-link"}
                href="#about"
                onClick={handleShowNavbar}
              >
                {t("news")}
              </a>
            </li>
            <li className="header-list">
              <a
                className={isSticky ? "header-link-sticky" : "header-link"}
                href="#contact"
                onClick={handleShowNavbar}
              >
                {t("contact")}
              </a>
            </li>
            <li className="header-list">
              <CustomDropdown
                className={isSticky ? "header-link-sticky" : ""}
                options={dropdownValues}
                value={selectedLanguage}
                onChange={handleChangeLanguage}
                changeDropdownValue={changeDropdownValue}
              />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
