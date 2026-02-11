import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <>
            <div style={{ height: "10vh" }}>
                <Header />
            </div>

            <div style={{ height: "80vh" }}>
                <Outlet />
            </div>

            <div style={{ height: "10vh" }}>
                <Footer />
            </div>
        </>
    )
}

export default Layout; 
