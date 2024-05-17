import React from 'react';
import { Link } from 'react-router-dom';

const BarraNavegacion = () => {
    return (
        <nav className="navbar navbar-expand-lg  mb-3">
            <div className="container">
                <Link className="navbar-brand" to="/">InventarioApp</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/inventario">Inventario</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pedido">Hacer Pedido</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/proveedores">Proveedor</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/acerca-de">Acerca De</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default BarraNavegacion;
