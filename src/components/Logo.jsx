import React from "react";
import LogoImage from '../assets/final_logo.png'
import LogoImagewhite from '../assets/final_log_white.png'
import { useNavigate } from "react-router-dom";
 
const Logo = ({heightValue}) => {
  const navigate_to = useNavigate();
 
  return (
    <img
    src={LogoImage}
    alt="URBIS"
    loading="lazy"
    height={heightValue}
    style={{flexGrow: 1, textAlign: 'flex-start', display: 'block', cursor: 'pointer'}}
    onClick={()=>{navigate_to("/")}}
  />
  );
}

export default Logo;