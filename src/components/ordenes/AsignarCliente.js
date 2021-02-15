import React, { useContext } from 'react';
import OrdenesContext from './../../context/ordenes/OrdenesContext';

const AsignarCliente = () => {

    // Context de pedidos
    const { cliente, agregarCliente } = useContext(OrdenesContext);

    return (
        <>
            <p className="mt-10 my-2 bg-white border-l-4 border-gray-800 text-gray-700 p-2 text-sm font-bold">3.- Asigna el nombre del cliente para la orden</p>
            <input
                className="mt-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cliente"
                type="text"
                placeholder="Nombre del cliente"
                value={cliente}
                onChange={e => agregarCliente(e.target.value)}
            />
        </>
    );
}

export default AsignarCliente;