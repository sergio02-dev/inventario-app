import { Link } from 'react-router-dom';
import useInventario from '../hook/useProveedor';

const ListaProveedores = () => {
    const proveedores = useInventario();

    return (
        <div className="container">
            <h1>Listado de Proveedores</h1>
            <div className='row'>
                {proveedores.map(proveedor => (
                    <div key={proveedor.id} className="col-md-6">
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">{proveedor.nombre}</h5>
                                <Link to={`/proveedores/${proveedor.id}`} className="btn btn-primary">Ver Detalles</Link>
                            </div>
                        </div>    
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListaProveedores;
