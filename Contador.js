import React, { useState } from 'react';
import './Contador.css'; 

const Contador = () => {
    const [valor, setValor] = useState(0);

    const incrementar = () => {
        setValor(valor + 1);
    };

    const decrementar = () => {
        setValor(valor - 1);
    };

    return (
        <div className="contador">
            <h1 className="contador-valor">{valor}</h1>
            <div className="contador-botones">
                <button onClick={incrementar} className="contador-boton">Incrementar</button>
                <button onClick={decrementar} className="contador-boton">Decrementar</button>
            </div>
        </div>
    );
};

export default Contador;
