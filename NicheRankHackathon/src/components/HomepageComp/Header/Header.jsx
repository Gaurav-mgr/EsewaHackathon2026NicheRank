import "./HeaderCss.css"

export default function Header(){
  return(
    <header>
        <div className="header-inner">

            <div className="header-left">
              <img className="h-8 w-31" src="src/assets/logo.png" alt="eSewa Logo"></img>
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
                  <button className="btn-register">Register</button>
                </div>
              </div>
              <a href="#">Forgot password?</a>
            </div>
        </div>
    </header>
  )
}