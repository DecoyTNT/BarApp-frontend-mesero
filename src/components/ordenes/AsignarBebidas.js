import React, { useState, useEffect, useContext } from 'react';
import Select from 'react-select';
import { gql, useQuery } from '@apollo/client';
import OrdenesContext from './../../context/ordenes/OrdenesContext';

const OBTENER_BEBIDAS = gql`
    query obtenerBebidas{
        obtenerBebidas{
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

const AsignarBebidas = () => {

    const [bebidas, setBebidas] = useState([]);

    // Context de pedidos
    const { agregarBebidas } = useContext(OrdenesContext);

    // Consultar la base de datos
    const { data, loading } = useQuery(OBTENER_BEBIDAS);

    useEffect(() => {
        if (bebidas === null) {
            agregarBebidas([]);
        } else {
            agregarBebidas(bebidas);
        }
        // eslint-disable-next-line
    }, [bebidas]);

    const seleccionarBebidas = bebida => {
        setBebidas(bebida)
    }

    // console.log(bebidas);

    if (loading) {
        return (
            <div>
                <h1 className="text-2xl text-gray-800 font-light text-center justify-center">Cargando...</h1>
            </div>
        );
    }

    return (
        <>
            <p className="mt-10 my-2 bg-white border-l-4 border-gray-800 text-gray-700 p-2 text-sm font-bold">1.- Selecciona las bebidas</p>
            <Select
                className="mt-3"
                options={data.obtenerBebidas}
                onChange={opcion => seleccionarBebidas(opcion)}
                isMulti={true}
                getOptionValue={opcion => opcion.id}
                getOptionLabel={opcion => `${opcion.tipoAlcohol === 'sinAlcohol' ? 'SIN ALCOHOL' : opcion.tipoAlcohol === 'clamato' ? 'CON CLAMATO' : opcion.tipoAlcohol.toUpperCase()} ${opcion.nombre} ${opcion.tipoServicio} - $${opcion.precio}`}
                placeholder="Busca o selecciona una o varias bebidas"
                noOptionsMessage={() => "No se encontro el cliente"}
            />
        </>
    );
}

export default AsignarBebidas;