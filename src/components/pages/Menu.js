import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Bebida from '../ui/Bebida';
import { useQuery, gql } from '@apollo/client';
import BebidasContext from './../../context/bebidas/BebidasContext';

const OBTENER_BEBIDAS = gql`
    query obtenerBebidasDisponibles{
        obtenerBebidasDisponibles{
            id
            nombre
            tipoAlcohol
            tipoServicio
            precio
            descripcion
            disponible
            imagen
        }
    }
`;

const Menu = () => {

    const { data, loading, startPolling, stopPolling } = useQuery(OBTENER_BEBIDAS);

    const { bebidas, obtenerBebidasDisponibles } = useContext(BebidasContext);

    useEffect(() => {
        if (bebidas.length === 0) {
            if (!loading) {
                obtenerBebidasDisponibles(data.obtenerBebidasDisponibles);
            }
        }
        if (!loading) {
            if (data.obtenerBebidasDisponibles.length !== bebidas.length) {
                obtenerBebidasDisponibles(data.obtenerBebidasDisponibles);
            }
        }
        // eslint-disable-next-line
    }, [loading, data]);

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
            <h1 className="text-3xl font-light mb-4">Menu</h1>

            <Link to="/nueva-orden" className="bg-blue-800 hover:bg-blue-900 inline-block mb-5 p-2 text-white uppercase font-bold rounded">
                Nueva Orden
            </Link>

            {/* {data.obtenerBebidasDisponibles.map(bebida => ( */}
            {bebidas.map(bebida => (
                <Bebida
                    key={bebida.id}
                    bebida={bebida}
                />
            ))}
        </>
    );
}

export default Menu;