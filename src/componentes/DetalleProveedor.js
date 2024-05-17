import React from 'react';
import { useParams } from 'react-router-dom';
import useProveedor from '../hook/useProveedor';


const DetalleProveedor = ({ match }) => {
    
let { id } = useParams();
const proveedor = useProveedor();
const proveedorDetalles = proveedor.find(proveedor => proveedor.id.toString() === id);

return (
    <div className="container">
      {proveedorDetalles ? (
        <div>
          <h1>{proveedorDetalles.nombre}</h1>
          <p>Dirección: {proveedorDetalles.direccion}</p>
          <p>Telefono: {proveedorDetalles.telefono}</p>
          <p>Email: {proveedorDetalles.email }</p>
          <p>Descripción: {proveedorDetalles.descripcion || "No disponible"}</p>
        </div>
      ) : (
        <p>Producto no encontrado.</p>
      )}
    </div>
  );
};

export default DetalleProveedor;
