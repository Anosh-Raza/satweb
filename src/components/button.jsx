import React from "react";
import PropTypes from "prop-types";
import '../assets/files/style.css'

export default function Button({
  placeholder = "Click Me", 
  url = "#", 
  bgColor = "bg-blue-500", 
  textColor = "text-white", 
  borderRadius = "rounded-md", 
  padding = "px-4 py-2", 
  borderBtn="border-2",
  textColorHover = "",
  extraClasses = "", 
  fontWeight="font-medium",
  textTransform="uppercase",

}) {
  return (
    <a
      href={url}
      className={`inline-block ${bgColor} ${textColor} ${borderRadius} ${padding} ${extraClasses} ${borderBtn} hover:${textColorHover} ${fontWeight} ${textTransform} transition ease-in-out hover:-translate-y-1 hover:scale-110`}
    >
      {placeholder}
    </a>
  );
}

// Add PropTypes for validation
Button.propTypes = {
  placeholder: PropTypes.string,
  url: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  borderRadius: PropTypes.string,
  padding: PropTypes.string,
  borderBtn: PropTypes.string,
  extraClasses: PropTypes.string,
  textColorHover: PropTypes.string,
  fontWeight:PropTypes.string,
  textTransform: PropTypes.string
};



