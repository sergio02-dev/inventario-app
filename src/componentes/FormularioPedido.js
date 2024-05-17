import React, { useState } from 'react';

// Componente para el formulario de pedidos
const FormularioPedido = () => {
    const [pedido, setPedido] = useState({ cantidad: '', producto: '' });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Pedido enviado:', pedido);
    };

    return (
        <div className="container formulario-custom">
            <h1 className="text-center">Crear un Pedido</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                <label htmlFor="producto" className="form-label">Producto</label>
                <input type="text" className="form-control" id="producto" value={pedido.producto} onChange={(e) => setPedido({ ...pedido, producto: e.target.value })} required/>
                </div>
                <div className="mb-3">
                <label htmlFor="cantidad" className="form-label">Cantidad</label>
                <input type="number" className="form-control" id="cantidad" value={pedido.cantidad} onChange={(e) => setPedido({ ...pedido, cantidad: e.target.value })} required/>
                </div>
                <div className="mb-3">
                <label htmlFor="proveedor" className="form-label">Proveedor</label>
                <input type="text" className="form-control" id="proveedor" value={pedido.proveedor} onChange={(e) => setPedido({ ...pedido, proveedor: e.target.value })} required/>
                </div>
                <button type="submit" className="btn btn-primary">Enviar Pedido</button>
            </form>
        </div>

    );
};

export default FormularioPedido;
