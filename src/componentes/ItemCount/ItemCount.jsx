import React from 'react'
import { useState } from 'react';

const ItemCount = (props) => {

    const [contador, setContador] =  useState(1);

    const incrementar = () => {
        if (contador < props.stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if( contador > 1){
            setContador(contador - 1);
        }
    }

  return (
    <div>
        <button onClick={incrementar}> + </button>
        <p> {contador} </p>
        <button onClick={decrementar}> - </button>
    </div>
  )
}

export default ItemCount