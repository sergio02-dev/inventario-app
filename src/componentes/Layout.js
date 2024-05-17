import React from 'react';
import BarraNavegacion from './BarraNavegacion';
import PieDePagina from './PieDePagina';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="layout">
            <BarraNavegacion />
            <main className="content">
                <Outlet />
            </main>
            <PieDePagina />
        </div>
    );
};

export default Layout;
