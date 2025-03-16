import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import ErrorComponent from "./src/components/ErrorComponent";
import Footer from "./src/components/Footer";
import ProductDetail from "./src/components/ProductDetail";  // ✅ Imported Product Detail Page

const AppLayout = () => {
    return (
        <div className="app flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

const appRouter = createHashRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { path: "/", element: <Body /> },
            { path: "/about", element: <About /> },
            { path: "/contact", element: <Contact /> },
            { path: "/product/:id", element: <ProductDetail /> },  // ✅ Added product detail route
        ],
        errorElement: <ErrorComponent />,
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
