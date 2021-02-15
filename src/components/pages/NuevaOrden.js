import React, { useContext, useState } from 'react';
import OrdenesContext from '../../context/ordenes/OrdenesContext';
import AsignarBebidas from '../ordenes/AsignarBebidas';
import ResumenOrden from './../ordenes/ResumenOrden';
import AsignarCliente from './../ordenes/AsignarCliente';
import Total from './../ordenes/Total';
import { gql, useMutation } from '@apollo/client';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const NUEVA_ORDEN = gql`
    mutation nuevaOrden($input: OrdenInput) {
        nuevaOrden(input: $input) {
            id
            bebidas {
                bebida
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
        }
    }
`;

const NuevaOrden = () => {

    const { bebidas, total, cliente } = useContext(OrdenesContext);

    const navigate = useNavigate();

    const [mensaje, setMensaje] = useState(null);

    const [nuevaOrden] = useMutation(NUEVA_ORDEN);

    const validarOrden = () => {
        return !bebidas.every(bebida => bebida.cantidad > 0) || total === 0 || cliente.trim() === '' ? 'opacity-50 cursor-not-allowed' : ''
    }

    const crearNuevaOrden = async () => {

        try {
            if (!bebidas.every(bebida => bebida.cantidad > 0) || total === 0 || cliente.trim() === '') {
                return;
            }

            // Remover de bebidas lo que no se ocupa
            const orden = bebidas.map(({ id, disponible, descripcion, imagen, __typename, ...beb }) => {

                let nuevaBebida = { ...beb, bebida: id };
                return nuevaBebida
            });

            await nuevaOrden({
                variables: {
                    input: {
                        bebidas: orden,
                        total,
                        cliente,
                        creado: Date.now().toString()
                    }
                }
            });

            navigate('/')

            Swal.fire(
                'Registrado!',
                `La orden fue registrada correctamente`,
                'success'
            );

        } catch (error) {
            setMensaje(error.message.replace('Error: ', ''));
            console.log({ error });

            setTimeout(() => {
                setMensaje(null);
            }, 3000);
        }
    }

    const mostrarMensaje = () => {
        return (
            <div className="bg-white py-2 px-3 w-full my-3 max-w-sm text-center mx-auto">
                <p>{mensaje}</p>
            </div>
        )
    }

    return (
        <>
            <h1 className="text-3xl font-light mb-4">Nueva Orden</h1>
            {mensaje && mostrarMensaje()}
            <div className="flex justify-center mt-10">
                <div className="w-full max-w-3xl">
                    <div className="mb-4">
                        <AsignarBebidas />
                    </div>
                    <div className="mb-4">
                        <ResumenOrden />
                    </div>
                    <div className="mb-4">
                        <AsignarCliente />
                    </div>
                    <div className="mb-4">
                        <Total />
                    </div>

                    <button
                        type="button"
                        className={`bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold rounded hover:bg-gray-900 ${validarOrden()}`}
                        onClick={crearNuevaOrden}
                    >
                        Registrar orden
                    </button>
                </div>
            </div>
        </>
    );
}

export default NuevaOrden;