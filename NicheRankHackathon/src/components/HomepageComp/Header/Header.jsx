import "./HeaderCss.css"

import {useState} from "react"
import esewaLogo from "../../../assets/logo.png"

export default function Header({ onRegister }) {
  return (
    <header>
      <div className="header-inner">

        <div className="header-left">
          <img className="h-8 w-31" src={esewaLogo} alt="eSewa Logo" />
          <div className="search-wrap">
            <img className="sch-icon" src="src/assets/icons/searchIcon.png"></img>
            <input  clsasName="esewa-search" type="text" placeholder="Search services/merchant by tags (e.g. adsl)" />
          </div>
        </div>

        <div className="header-right">
          <div className="header-right-top">
            <div className="user-auth">
              <div className="user-id-container">
                <img className="user-id-icon" src="src/assets/icons/user.png"></img>
                <input className="user-id" type="text" placeholder="eSewa ID" />
              </div>
              <div className="user-pass-container">
                <img className="user-pass-icon" src="src/assets/icons/padlock.png"></img>
                <input className="user-pass" type="text" placeholder="Password" />
              </div>
            </div>

            <div className="buttons">
              <button className="btn-login">Login</button>
              <button className="btn-register" onClick={onRegister}>Register</button>
            </div>
          </div>
          <a href="#">Forgot password?</a>
        </div>
      </div>
    </header>
  )
}
