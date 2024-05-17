import { useState, useEffect } from 'react';
import datosProveedor from '../datos/proveedores.json';

// Hook personalizado 
const useProveedor = () => {
    const [inventario, setProveedor] = useState([]);

    useEffect(() => {
        setProveedor(datosProveedor); 
    }, []);

    return inventario;
};

export default useProveedor;
