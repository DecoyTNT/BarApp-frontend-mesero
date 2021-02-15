import React, { useReducer } from 'react';
import OrdenesContext from './OrdenesContext';
import OrdenesReducer from './OrdenesReducer';
import {
    SELECCIONAR_BEBIDAS,
    CANTIDAD_BEBIDAS,
    ACTUALIZAR_TOTAL,
    AGREGAR_CLIENTE
} from '../../types/index';

const OrdenesState = ({ children }) => {

    const initialState = {
        bebidas: [],
        total: 0,
        cliente: ''
    }

    const [state, dispatch] = useReducer(OrdenesReducer, initialState);

    const agregarBebidas = bebidasSeleccionadas => {
        let nuevoState;
        if (state.bebidas.length > 0) {
            // Tomar el segundo arreglo, una copia para asignarlo al primero
            nuevoState = bebidasSeleccionadas.map(bebida => {
                const nuevoObjeto = state.bebidas.find(bebidaState => bebidaState.id === bebida.id);
                return {
                    ...bebida, ...nuevoObjeto
                }
            })
        } else {
            nuevoState = bebidasSeleccionadas;
        }

        dispatch({
            type: SELECCIONAR_BEBIDAS,
            payload: nuevoState
        });
    }

    // Modifica las cantidades de las bebidas
    const cantidadBebidas = nuevaBebida => {
        dispatch({
            type: CANTIDAD_BEBIDAS,
            payload: nuevaBebida
        })
    }

    const actualizarTotal = () => {
        dispatch({
            type: ACTUALIZAR_TOTAL
        })
    }

    const agregarCliente = cliente => {
        dispatch({
            type: AGREGAR_CLIENTE,
            payload: cliente
        })
    }

    return (
        <OrdenesContext.Provider
            value={{
                bebidas: state.bebidas,
                total: state.total,
                cliente: state.cliente,
                agregarBebidas,
                cantidadBebidas,
                actualizarTotal,
                agregarCliente
            }}
        >
            {children}
        </OrdenesContext.Provider>
    );
}

export default OrdenesState;