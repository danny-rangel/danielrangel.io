import React from "react"
import "./toggle.css"

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <label className="switch" theme={theme}>
      <input
        type="checkbox"
        onClick={toggleTheme}
        defaultChecked={theme === "dark"}
      />
      <span className="slider round"></span>
    </label>
  )
}

export default Toggle
