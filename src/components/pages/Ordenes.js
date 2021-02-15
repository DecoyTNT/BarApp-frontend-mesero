import React, { useEffect } from 'react';
import Orden from '../ui/Orden';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

const OBTENER_ORDENES = gql`
    query obtenerOrdenes {
        obtenerOrdenes {
            id
            bebidas {
                bebida
                tipoAlcohol
                tipoServicio
                cantidad
                nombre
                precio
                totalBebida
            }
            total
            completada
            proceso
            cliente
            corte
            creado
        }
    }
`;

const Ordenes = () => {

    const { data, loading, startPolling, stopPolling } = useQuery(OBTENER_ORDENES);

    useEffect(() => {
        startPolling(1000);
        return () => {
            stopPolling();
        }
        // eslint-disable-next-line
    }, [startPolling, stopPolling]);

    if (loading) {
        return (
            <div>
                <h1 className="text-2xl text-gray-800 font-light text-center justify-center">Cargando...</h1>
            </div>
        );
    }

    return (
        <>
            <h1 className="text-3xl font-light mb-4">Ordenes</h1>
            <Link to="/nueva-orden" className="bg-blue-800 hover:bg-blue-900 inline-block mb-5 p-2 text-white uppercase font-bold rounded">
                Nueva Orden
            </Link>

            <div className="sm:flex sm:flex-wrap -mx-3">
                {data.obtenerOrdenes.map(orden => (
                    <Orden
                        key={orden.id}
                        orden={orden}
                    />
                ))}
            </div>
        </>
    );
}

export default Ordenes;