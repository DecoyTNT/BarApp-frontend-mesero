import React from 'react';
// import { Link } from 'react-router-dom';
// import BebidasContext from './../../context/bebidas/BebidasContext';
// import { useMutation, gql } from '@apollo/client';

const Bebida = ({ bebida }) => {

    // Disponible ref para acceder al valor directamente
    // const disponibleRef = useRef(bebida.disponible);

    // const { modificarBebida } = useContext(BebidasContext);

    // eslint-disable-next-line
    const { nombre, precio, tipoAlcohol, tipoServicio, descripcion } = bebida;

    return (
        <div className="w-full px-3 mb-4">
            <div className="p-5 shadow-md bg-white">
                <div className="lg:flex">
                    {/* <div className="lg:w-5/12 xl:w-3/12">
                        <div className="sm:flex sm:-mx-2 pl-2">
                            <label className="block mt-5 sm:w-2/4" htmlFor="disponible">
                                <span className="block text-gray-800 mb-2">Disponible</span>
                                <select
                                    className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                    name="disponible"
                                    id="disponible"
                                    value={disponible}
                                    ref={disponibleRef}
                                    onChange={actualizarDisponibilidad}
                                >
                                    <option value="true">Disponible</option>
                                    <option value="false">No Disponible</option>
                                </select>
                            </label>
                        </div>
                    </div> */}
                    <div className="lg:w-7/12 xl:w-9/12 pl-5">
                        <p className="font-bold text-2xl text-yellow-600 mb-4">
                            {nombre}
                        </p>
                        <p className="text-gray-600 mb-4">
                            Tipo de alcohol: <span className="text-gray-700 font-bold">{tipoAlcohol === 'sinAlcohol' ? 'SIN ALCOHOL' : tipoAlcohol === 'clamato' ? 'CON CLAMATO' : tipoAlcohol.toUpperCase()}</span>
                        </p>
                        {tipoAlcohol !== '' && tipoAlcohol !== 'cocktail' && tipoAlcohol !== 'cerveza' && tipoAlcohol !== 'clamato' && tipoAlcohol !== 'sinAlcohol' && (
                            <p className="text-gray-600 mb-4">
                                Tipo de servicio: <span className="text-gray-700 font-bold">{tipoServicio.toUpperCase()}</span>
                            </p>
                        )}
                        <p className="text-gray-600 mb-4">{descripcion}</p>
                        <p className="text-gray-600 mb-4">
                            Precio: <span className="text-gray-700 font-bold">${precio}</span>
                        </p>
                        {/* <Link
                            to="/editar-bebida" className="bg-blue-800 hover:bg-blue-900 inline-block mb-5 p-2 text-white uppercase font-bold rounded"
                            onClick={() => seleccionarBebida(bebida)}
                        >
                            Editar Bebida
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bebida;