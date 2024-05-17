import { useState, useEffect } from 'react';
import datosProveedor from '../datos/proveedores.json';

const useProveedor = () => {
    const [proveedor, setProveedor] = useState([]);

    useEffect(() => {
        setProveedor(datosProveedor); 
    }, []);

    return proveedor;
};

export default useProveedor;
