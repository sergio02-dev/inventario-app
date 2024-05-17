import { useState, useEffect } from 'react';
import datosInventario from '../datos/inventario.json';

// Hook personalizado 
const useInventario = () => {
    const [inventario, setInventario] = useState([]);

    useEffect(() => {
        setInventario(datosInventario); 
    }, []);

    return inventario;
};

export default useInventario;
