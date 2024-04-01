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

  const [selectedLanguage, setSelectedLanguage] = useState(dropdownValues[0]);

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

  const handleChangeLanguage = (language) => {
    setSelectedLanguage(language);
  };

  const changeDropdownValue = (newValue) => {
    setSelectedLanguage(newValue);
  };
  return {
    dropdownValues,
    isSticky,
    selectedLanguage,
    handleShowNavbar,
    handleChangeLanguage,
    changeDropdownValue,
    showNavbar,
  };
};
