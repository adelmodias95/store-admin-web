import styled from "styled-components";

import { VARIABLES } from "../../GlobalStyle";

export const LoginContainer = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;

    h2 {
        font-size: 2rem;
        text-align: center;
        color: ${VARIABLES.lightTheme.titleColor};
        font-weight: 600;
        margin-bottom: 1rem;
    }

    form {
        width: 100%;
        max-width: 500px;

        fieldset {
            border: none;
            padding: 0;
            margin: 0 0 1.5rem 0;

            label {
                color: white;

                input {
                    margin-right: 0.5rem;
                }
            }
        }

        > input {
            display: block;
            width: 100%;
            padding: 15px 20px;
            background: #fff;
            border: 1px solid rgba(145, 158, 171, 0.24);
            border-radius: 0.5rem;

            font-size: 1rem;
            color: ${VARIABLES.lightTheme.textColor};

            & + input {
                margin-top: 1.5rem;
            }

            &::placeholder {
                font-size: 1rem;
                color: ${VARIABLES.lightTheme.textColor};
            }
        }

        small {
            display: none;
            margin: 1rem 0 0 0;

            color: #f44336;
            font-size: 1rem;
            font-weight: 500;

            &.active {
                display: block;
            }
        }

        > button {
            display: block;
            width: 100%;
            background: ${VARIABLES.lightTheme.mainColor};
            border-radius: 0.5rem;
            padding: 15px 20px;
            cursor: pointer;
            transition: 0.5s all;
            margin-top: 2rem;

            &:hover {
                background: #3b60c0;
            }
        }
    }
`;

export const Button = styled.button`
    background: red;
    border: none;
    color: white;
`;
