import React, { useContext } from 'react';
import OrdenesContext from './../../context/ordenes/OrdenesContext';
import BebidasResumen from './BebidasResumen';

const ResumenOrden = () => {

    const { bebidas } = useContext(OrdenesContext);

    return (
        <>
            <p className="mt-10 my-2 bg-white border-l-4 border-gray-800 text-gray-700 p-2 text-sm font-bold">2.- Ajusta las cantidades de las bebidas</p>
            {bebidas.length > 0
                ?
                <>
                    {bebidas.map(bebida => (
                        <BebidasResumen
                            key={bebida.id}
                            bebida={bebida}
                        />
                    ))}
                </>
                :
                <p className="mt-5 text-sm">Aún no hay bebidas</p>
            }
        </>
    );
}

export default ResumenOrden;