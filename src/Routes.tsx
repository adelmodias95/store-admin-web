import { createBrowserRouter } from "react-router-dom";

import { PrivateRoute } from "./components/PrivateRoutes";

import { HomePage } from "./pages/HomePage";
import { action as loginAction, LoginPage } from "./pages/LoginPage/LoginPage";
import { LayoutComponent } from "./layouts/LayoutComponent";
import { Products } from "./pages/Products";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutComponent />,
        children: [
            {
                path: "/",
                element: (
                    <PrivateRoute>
                        <HomePage />
                    </PrivateRoute>
                ),
            },
            {
                path: "/login",
                element: <LoginPage />,
                action: loginAction,
            },
            {
                path: "/products",
                element: (
                    <PrivateRoute>
                        <Products />
                    </PrivateRoute>
                ),
            },
        ],
    },
]);

export { router };
