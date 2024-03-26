import { useEffect } from "react";
import { Form, useActionData, useNavigate } from "react-router-dom";

// Styled
import { LoginContainer, Button } from "./styled";

// Services
import { useAuthStore } from "../../stores/authStore";
import { login } from "../../services/services";

export async function action({ request }) {
    document.querySelector(".alert-error").innerHTML = "";
    document.querySelector(".alert-error").classList.remove("active");

    try {
        let formData = await request.formData();
        // const type = formData.get("type");
        const email = formData.get("email");
        const password = formData.get("password");
        // const response = type === "register" ? await register({ email, password }) : await login({ email, password });
        const response = await login({ email, password });
        const { accessToken, refreshToken } = response.data;
        return { tokens: { accessToken, refreshToken }, error: null };
    } catch (error) {
        document.querySelector(".alert-error").innerHTML = error.response.data.message;
        document.querySelector(".alert-error").classList.add("active");

        return {
            error: error?.response?.data?.message || error.message,
            tokens: null,
        };
    }
}

export function LoginPage() {
    const actionData = useActionData();
    const navigate = useNavigate();
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn());
    const login = useAuthStore((state) => state.login);
    useEffect(() => {
        if (actionData?.tokens) {
            login(actionData.tokens);
            navigate("/");
        }
        // }, [actionData]);
    });

    if (isLoggedIn) {
        navigate("/");
    }

    return (
        <LoginContainer>
            <Form method="post">
                <h2>Acesse sua conta.</h2>
                {actionData?.error && <div className="alert">{actionData?.error}</div>}
                {/* <fieldset>
                    <label htmlFor="login">
                        <input type="radio" id="login" name="type" value="login" defaultChecked />
                        Login
                    </label>
                    <label htmlFor="register">
                        <input type="radio" id="register" name="type" value="register" />
                        Register
                    </label>
                </fieldset> */}
                <input type="text" name="email" placeholder="Email" aria-label="Email" required />
                <input type="password" name="password" placeholder="Password" aria-label="Password" required />

                <small className="alert-error"></small>

                <Button type="submit" className="contrast">
                    Login
                </Button>
            </Form>
        </LoginContainer>
    );
}
