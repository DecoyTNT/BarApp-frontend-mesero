import {
    SELECCIONAR_BEBIDAS,
    CANTIDAD_BEBIDAS,
    ACTUALIZAR_TOTAL,
    AGREGAR_CLIENTE
} from '../../types/index';

const OrdenesReducer = (state, action) => {
    switch (action.type) {

        case SELECCIONAR_BEBIDAS:
            return {
                ...state,
                bebidas: action.payload
            }

        case CANTIDAD_BEBIDAS:
            return {
                ...state,
                bebidas: state.bebidas.map(bebida => bebida.id === action.payload.id ? action.payload : bebida)
            }

        case ACTUALIZAR_TOTAL:
            return {
                ...state,
                total: state.bebidas.reduce((nuevoTotal, bebida) => nuevoTotal += bebida.precio * bebida.cantidad, 0)
            }

        case AGREGAR_CLIENTE:
            return {
                ...state,
                cliente: action.payload
            }

        default:
            return state;
    }
}

export default OrdenesReducer;