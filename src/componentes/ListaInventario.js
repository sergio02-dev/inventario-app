
import { Link } from 'react-router-dom';
import useInventario from '../hook/useInventario';


const ListaInventario = () => {
    const inventario = useInventario(); 
    
    return (
        <div className="container">
            <h1>Listado de Inventario</h1>
            <div className='row'>
                {inventario.map(item => (
                    <div key={item.id} className="col-md-6">
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">{item.nombre}</h5>
                                {/* <p className="card-text">Cantidad: {item.cantidad}</p> */}
                                <Link to={`/inventario/${item.id}`} className="btn btn-primary">Ver Detalles</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>    
        </div>
    );
};

export default ListaInventario;
