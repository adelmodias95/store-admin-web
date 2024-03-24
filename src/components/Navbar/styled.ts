import styled from "styled-components";

import { VARIABLES } from "../../GlobalStyle";

const Header = styled.header`
    padding: 1rem 0;
    box-shadow: ${VARIABLES.boxShadow};

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h1 {
        font-size: 1.5rem;
        font-weight: 700;
        color: ${VARIABLES.mainColor};
        white-space: nowrap;
    }

    ul {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            & + li {
                margin-left: 1rem;
            }

            a {
                color: ${VARIABLES.titleColor};
                text-decoration: none;

                strong {
                    font-weight: 500;
                }
            }
        }
    }
`;

export { Header };
