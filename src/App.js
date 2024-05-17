import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './componentes/Layout';


import PaginaPrincipal from './componentes/PaginaPrincipal';
import ListaInventario from './componentes/ListaInventario';
import DetalleInventario from './componentes/DetalleInventario';
import FormularioPedido from './componentes/FormularioPedido';
import ListaProveedores from './componentes/ListaProveedores';
import DetalleProveedor from './componentes/DetalleProveedor';
import PaginaAcercaDe from './componentes/PaginaAcercaDe';
import PaginaNoEncontrada from './componentes/PaginaNoEncontrada';


const App = () => {
  return (
    <Router>
      
      <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<PaginaPrincipal />} />
                <Route path="/inventario" element={<ListaInventario />} />
                <Route path="/inventario/:id" element={<DetalleInventario />} />
                <Route path="/pedido" element={<FormularioPedido />} />
                <Route path="/proveedores" element={<ListaProveedores />} />
                <Route path="/proveedores/:id" element={<DetalleProveedor />} />
                <Route path="/acerca-de" element={<PaginaAcercaDe />} />
                <Route path="*" element={<PaginaNoEncontrada />} />
            </Route>    
      </Routes>
      
    </Router>
  );
};

export default App;
