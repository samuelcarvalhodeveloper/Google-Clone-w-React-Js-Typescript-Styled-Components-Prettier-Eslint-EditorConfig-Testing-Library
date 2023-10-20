import styled, { StyledComponent } from "styled-components";

const Styles: StyledComponent<"footer", any, {}, never> = styled.footer`
  width: 100%;
  background: #f2f2f2;
  color: #70757a;
  overflow: hidden;

  .footer__region {
    padding: 1.6rem 3rem;
    border-bottom: 0.1rem solid rgba(32, 33, 36, 0.1);
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .footer__country {
      font-size: 1.4rem;
    }
  }

  .footer__container {
    width: 100%;
    padding: 0.1rem 2.5rem;
    display: flex;
    justify-content: space-between;

    .footer__more {
      display: flex;
      justify-content: center;
      align-items: center;

      .footer__link {
        font-size: 1.4rem;
        color: #70757a;
        text-decoration: none;
        padding: 1.5rem;
        display: inline-block;
        text-align: center;
      }

      .footer__link:hover {
        text-decoration: underline;
      }
    }

    .footer__settings {
      display: flex;
      justify-content: center;
      align-items: center;

      .footer__link {
        font-size: 1.4rem;
        color: #70757a;
        text-decoration: none;
        padding: 1.5rem;
        display: inline-block;
      }

      .footer__link:hover {
        text-decoration: underline;
      }
    }
  }

  @media screen and (min-width: 665px) and (max-width: 1200px) {
    .footer__container {
      justify-content: space-evenly;
    }
  }

  @media screen and (max-width: 665px) {
    .footer__container {
      justify-content: center;
      align-items: center;
      flex-flow: column wrap;
    }
  }
`;

export default Styles;
