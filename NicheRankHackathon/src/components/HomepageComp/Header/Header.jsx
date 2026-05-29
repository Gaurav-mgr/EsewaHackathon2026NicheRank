import "./HeaderCss.css"

import esewaLogo from "../../../assets/logo.png"

export default function Header({ onRegister }) {
  return (
    <header>
      <div className="header-inner">

        <div className="header-left">
          <img className="h-8 w-31" src={esewaLogo} alt="eSewa Logo" />
          <div className="search-wrap">
            <span className="search-icon"></span>
            <input type="text" placeholder="Search services/merchant by tags (e.g. adsl)" />
          </div>
        </div>

        <div className="header-right">
          <div className="header-right-top">
            <div className="user-auth">
              <input type="text" placeholder="eSewa ID" />
              <input type="text" placeholder="Password" />
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
