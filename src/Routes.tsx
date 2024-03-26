import { createBrowserRouter } from "react-router-dom";

import { PrivateRoute } from "./components/PrivateRoutes";

import { HomePage } from "./pages/HomePage";
import { action as loginAction, LoginPage } from "./pages/LoginPage/LoginPage";
import { LayoutComponent } from "./layouts/LayoutComponent";
import { ProductsPage } from "./pages/ProductsPage";
import { StoresPage } from "./pages/StoresPage";

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
                path: "/produtos",
                element: (
                    <PrivateRoute>
                        <ProductsPage />
                    </PrivateRoute>
                ),
            },
            {
                path: "/lojas",
                element: (
                    <PrivateRoute>
                        <StoresPage />
                    </PrivateRoute>
                ),
            },
        ],
    },
]);

export { router };
