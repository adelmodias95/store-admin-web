import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { PrivateRoute } from "./components/PrivateRoutes";

import { HomePage } from "./pages/HomePage";
import { action as loginAction, LoginPage } from "./pages/LoginPage";
import { LayoutComponent } from "./layouts/LayoutComponent";

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
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
