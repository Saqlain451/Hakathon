import React from 'react'
import "./button.css";
const Button = ({btnName,btnClick}) => {
  return (
    <button onClick={btnClick}>{btnName}</button>
  )
}

export default Button