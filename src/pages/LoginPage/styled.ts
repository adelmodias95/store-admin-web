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

    h1 {
        color: ${VARIABLES.mainColor};
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
    }

    h2 {
        text-align: center;
        color: ${VARIABLES.titleColor};
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
            margin-bottom: 1.5rem;
            padding: 15px 20px;
            background: #1c212c;
            border: 1px solid #2a3140;
            border-radius: 0.5rem;

            font-size: 1rem;
            color: #e0e3e7;

            &::placeholder {
                font-size: 1rem;
                color: #e0e3e7;
            }
        }

        > button {
            display: block;
            width: 100%;
            background: #524ed2;
            border-radius: 0.5rem;
            padding: 15px 20px;
            cursor: pointer;
            transition: 0.5s all;

            &:hover {
                background: #655cd6;
            }
        }
    }
`;

export const Button = styled.button`
    background: red;
    border: none;
    color: white;
`;
