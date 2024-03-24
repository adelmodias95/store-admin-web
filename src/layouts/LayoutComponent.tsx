import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/Navbar/NavBar";

export function LayoutComponent() {
    return (
        <div className="wrapper">
            <NavBar />
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
