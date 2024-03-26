import { Link } from "react-router-dom";
import { useAuthStore } from "../../stores/authStore";

import { Header } from "./styled";

export function NavBar() {
    const logout = useAuthStore((state) => state.logout);
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn());
    return (
        <>
            {isLoggedIn ? (
                <Header>
                    <div className="container">
                        <h1>Admin Store</h1>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">
                                        <strong>Home</strong>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/lojas">
                                        <strong>Lojas</strong>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/produtos">
                                        <strong>Produtos</strong>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <ul>
                            <li>
                                <button onClick={() => logout()}>
                                    <strong>Logout</strong>
                                </button>
                            </li>
                        </ul>
                    </div>
                </Header>
            ) : (
                <Header>
                    <div className="container justify-center">
                        <h1 className="text-center">Admin Store</h1>
                    </div>
                </Header>
            )}
        </>
    );
}
