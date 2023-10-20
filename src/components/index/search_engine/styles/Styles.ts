import styled, { StyledComponent } from "styled-components";

const Styles: StyledComponent<"main", any, {}, never> = styled.main`
  height: calc(100vh - 15.5rem);
  min-height: 60rem;
  width: 100%;
  max-width: 63rem;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 0 2rem;

  .main__container {
    margin: 35% 0;
    width: 100%;
    display: flex;
    align-items: center;
    flex-flow: column wrap;
    gap: 3rem;

    .main__logo {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 27.2rem;
      height: 9.2rem;
    }

    .main__google {
      width: 100%;
    }

    .main__form {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5rem;
      border: 0.1rem solid #dfe1e5;

      .main__content {
        display: flex;
        padding: 0 1rem;
        width: 100%;

        .main__label {
          width: 4.3rem;
          height: 4.3rem;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 2rem;
          }
        }

        .main__input {
          width: 100%;
          border: none;
          background: none;
          color: rgba(0, 0, 0, 0.87);
        }

        .main__action {
          height: 4.4rem;
          width: 4.4rem;
          padding: 0.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background: none;
          border: none;
          cursor: pointer;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .main__form:hover {
      box-shadow: 0 0.1rem 0.6rem rgba(32, 33, 36, 0.28);
    }

    .main__lucky {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      overflow: hidden;
      width: 100%;

      .main__redirect {
        height: 3.5rem;
        width: 12.5rem;
        border: none;
        background: #f8f9fa;
        border-radius: 0.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }

      .main__redirect:hover {
        box-shadow: 0 0.1rem 0.1rem rgb(0 0 0 / 10%);
        border: 0.1rem solid #dadce0;
      }
    }
  }
`;

export default Styles;
