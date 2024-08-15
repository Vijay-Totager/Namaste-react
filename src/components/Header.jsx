import APP_LOGO from "../utils/constants";

const Header = () => {
    return (
      <div className="header">
        <div className="logo">
          <img
            className="logo-image"
            alt="logo"
            src={APP_LOGO}
          />
        </div>
        <div className="nav-items">
          <ul className="ul">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CART</li>
            <li>PROFILE</li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;