import React from 'react';
import { useParams } from 'react-router-dom';
import useInventario from '../hook/useInventario';

const DetalleInventario = () => {
  let { id } = useParams();
  const inventario = useInventario();
  const producto = inventario.find(item => item.id.toString() === id);
  

  return (
    <div className="container">
      {producto ? (
        <div>
          <h1>{producto.nombre}</h1>
          <p>Cantidad: {producto.cantidad}</p>
          <p>Descripción: {producto.descripcion || "No disponible"}</p>
        </div>
      ) : (
        <p>Producto no encontrado.</p>
      )}
    </div>
  );
};

export default DetalleInventario;
