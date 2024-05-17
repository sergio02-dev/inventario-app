import React from 'react';

// Componente para mostrar cuando no se encuentra una página solicitada
const PaginaNoEncontrada = () => {
    return (
        <div className="container mt-5">
            <h1>Página no encontrada</h1>
            <p>La página que estás buscando no existe o ha sido movida.</p>
        </div>
    );
};

export default PaginaNoEncontrada;
