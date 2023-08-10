import Styled from "./Styled";

function SearchEngine(): JSX.Element {
  return (
    <Styled>
      <div className="main__container">
        <div className="main__logo">
          <img
            src="/imgs/pages/index/SearchEngineGoogleLogo.png"
            className="main__google"
            alt="Google logo"
          />
        </div>
        <form
          action="#"
          className="main__form">
          <div className="main__content">
            <div className="main__label">
              <img
                src="/imgs/pages/index/SearchBarMagnifierIcon.svg"
                alt="Search Icon"
              />
            </div>
            <input
              type="text"
              className="main__input"
              disabled
              autoComplete="new-password"
            />
            <button
              type="button"
              className="main__action">
              <img src="/imgs/pages/index/VoiceSearchMicrophoneIcon.svg" />
            </button>
            <button
              type="button"
              className="main__action">
              <img src="/imgs/pages/index/SearchEngineGoogleLensCameraIcon.svg" />
            </button>
          </div>
        </form>

        <div className="main__lucky">
          <button
            className="main__redirect"
            type="button">
            Google Search
          </button>
          <button
            className="main__redirect"
            type="button">
            I'm Feeling Lucky
          </button>
        </div>
      </div>
    </Styled>
  );
}

export default SearchEngine;
