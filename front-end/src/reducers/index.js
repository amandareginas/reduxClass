import { combineReducers } from "redux";

const initialState = {
    itens: []
}

function itensReducer (state = initialState, action) {
    
    if (action.type === "ADICIONAR") {
        return { itens: [ ...state.itens, { ...action.value }] }
    }
    else {
        return state;
    }
}

function tituloReducer(state = { titulo: "Mercado"}, action) {
    if(action.type === "ALTERAR") {
        return { titulo: action.value };
    }
    else {
        return state;
    }
}

const reducers = combineReducers({itensReducer, tituloReducer});

export default reducers;