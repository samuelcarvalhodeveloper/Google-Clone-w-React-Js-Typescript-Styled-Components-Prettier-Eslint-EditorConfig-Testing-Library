import Styled from "./Styled";

function Header(): JSX.Element {
  return (
    <Styled>
      <div className="header__container">
        <a
          href="#"
          className="header__link">
          Gmail
        </a>
        <a
          href="#"
          className="header__link">
          Images
        </a>
        <a
          href="#"
          className="header__more">
          <img
            src="/imgs/pages/index/ui_icons/header/MoreGoogleAppsIcon.svg"
            alt="more button"
            className="header__icon"
          />
        </a>
        <a className="header__profile">
          <div className="header__photo" />
        </a>
      </div>
    </Styled>
  );
}

export default Header;
