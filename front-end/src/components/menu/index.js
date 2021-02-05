import React from 'react';
import { useSelector } from 'react-redux';

function Menu() {
    const stateTitulo = useSelector((state) =>
        state.tituloReducer.titulo
        )

    return  (
        <div className="mb-3">Lista de: {stateTitulo}</div>
    )
}

export default Menu;