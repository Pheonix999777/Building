import i18next from "i18next";
import { useEffect, useState } from "react";

export const useHeaderProps = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const dropdownValues = [
    {
      label: "UZ",
      value: "UZ",
    },
    {
      label: "RU",
      value: "RU",
    },
    {
      label: "EN",
      value: "EN",
    },
  ];

  const [selectedLanguage] = useState(dropdownValues[0]);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleChangeLanguage = (languageCode) => {
    i18next.changeLanguage(languageCode);
    setShowNavbar(false);
  };

  return {
    dropdownValues,
    isSticky,
    selectedLanguage,
    handleShowNavbar,
    handleChangeLanguage,
    showNavbar,
  };
};
