import React, { useContext, useState, useEffect } from 'react';
import OrdenesContext from './../../context/ordenes/OrdenesContext';

const BebidasResumen = ({ bebida }) => {

    const { cantidadBebidas, actualizarTotal } = useContext(OrdenesContext);

    const [cantidad, setCantidad] = useState(0);

    useEffect(() => {
        actualizarCantidad();
        actualizarTotal();
        // eslint-disable-next-line
    }, [cantidad]);

    const actualizarCantidad = () => {
        let nuevoBebida = { ...bebida, cantidad: Number(cantidad) };
        nuevoBebida = { ...nuevoBebida, totalBebida: Number(cantidad * precio) };
        cantidadBebidas(nuevoBebida);
    }

    const { nombre, tipoServicio, precio } = bebida;

    return (
        <div className="md:flex md:justify-between md:items-center mt-5">
            <div className="md:w-2/4 mb-2 md:mb-0">
                <p className="text-sm">{nombre} {tipoServicio}</p>
                <p>$ {precio}</p>
            </div>
            <input
                type="number"
                placeholder="Cantidad"
                className="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:ml-4"
                onChange={e => setCantidad(e.target.value)}
                value={cantidad}
            />
        </div>
    );
}

export default BebidasResumen;