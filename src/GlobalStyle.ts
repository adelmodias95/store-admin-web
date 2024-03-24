import { createGlobalStyle } from "styled-components";

const VARIABLES = {
    // Colors
    mainColor: "#3f6ad8",
    titleColor: "#212b36",
    textColor: "#637381",
    bodyBgLightTheme: "#f1f4f6",
    bodyBgDarkTheme: "#f1f4f6",

    // Effects
    boxShadow:
        "0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03), 0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03), 0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05), 0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03)",

    // Responsive
    screenXl: "1200px",
    screenLg: "992px",
    screenMd: "768px",
    screenSm: "576px",
};

const GlobalStyles = createGlobalStyle`
  /* html {
    --color-text: black;
    --color-background: white;
    --color-primary: rebeccapurple;
  } */

    /* Reboot */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
    }

    html,
    body {
        height: 100%;
    }

    body {
        background: ${VARIABLES.bodyBgLightTheme};
        font-family: "Poppins", sans-serif;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    /* Container */
    .container {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;

        @media (min-width: ${VARIABLES.screenSm}) {
            max-width: 540px;
        }

        @media (min-width: ${VARIABLES.screenMd}) {
            max-width: 720px;
        }

        @media (min-width: ${VARIABLES.screenLg}) {
            max-width: 960px;
        }

        @media (min-width: ${VARIABLES.screenXl}) {
            max-width: 1170px;
        }
    }

    .container-fluid {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }
`;

export { VARIABLES, GlobalStyles };
