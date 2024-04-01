import { useEffect, useState } from "react";

export const useCustomDropdown = () => {
  const [isOpen, setOpen] = useState(false);
  const [innerValue, setInnerValue] = useState(null);
  const handleClose = () => setOpen(false);

  const handleToggle = () => setOpen((prev) => !prev);

  const handleChange = (option) => setInnerValue(option);

  return {
    isOpen,
    handleToggle,
    handleClose,
    innerValue,
    handleChange,
  };
};
