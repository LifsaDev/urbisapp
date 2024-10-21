import React, { useState } from "react";
import { IconButton, Menu, MenuItem, Box } from "@mui/material";
import { useLang } from "../contexts/langContext";
//import { useFlash } from "../contexts/FlashContext.jsx";
import englishFlag from "../assets/english.png";
import frenchFlag from "../assets/french.png";
import arabicFlag from "../assets/arabe.png";
import { styled } from "@mui/system";

// Styled IconButton to display the flag
const FlagButton = styled(IconButton)(() => ({
  backgroundSize: "cover",
  width: 32,
  height: 32,
  borderRadius: "0px",
}));

const LangSwitcher = () => {
  const { lang, changeLanguage } = useLang();
  //const { triggerFlash } = useFlash();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (newLang) => {
    changeLanguage(newLang);
    //triggerFlash();
    handleClose();
  };

  const getFlag = (lang) => {
    switch (lang) {
      case "en":
        return englishFlag;
      case "fr":
        return frenchFlag;
      case "ar":
        return arabicFlag;
      default:
        return englishFlag;
    }
  };

  return (
    <Box sx={{mr: 1, display: { xs: 'block', sm: 'block' } }}>
      <FlagButton
        onClick={handleMenu}
        sx={{ backgroundImage: `url(${getFlag(lang)})` }}
        aria-label="Change Language"
      />
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleLanguageChange("en")}>
          <img
            src={englishFlag}
            alt="English"
            style={{ width: "24px", marginRight: "8px" }}
          />{" "}
          English
        </MenuItem>
        <MenuItem onClick={() => handleLanguageChange("fr")}>
          <img
            src={frenchFlag}
            alt="French"
            style={{ width: "24px", marginRight: "8px" }}
          />{" "}
          Français
        </MenuItem>
        <MenuItem onClick={() => handleLanguageChange("ar")}>
          <img
            src={arabicFlag}
            alt="Arabic"
            style={{ width: "24px", marginRight: "8px" }}
          />{" "}
          عربي
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default LangSwitcher;
