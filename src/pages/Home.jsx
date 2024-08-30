import React, { useEffect } from "react";
import { useNavigate, Navigate, Outlet } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const user = window?.localStorage?.getItem("user");
        if (user) {
            navigate("/dashboard");
        }
        else {
            navigate('/login');
        }

    }, [])

    return (
        <RootLayout>
            <Outlet />
        </RootLayout>

    );
}

export default Home;