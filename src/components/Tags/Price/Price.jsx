import React from 'react';
//CSS
import './price.css';


export default function Price(props) {
    let signo = "$";
    let repetirSigno = signo.repeat(props.price);

    let resta = 4 - props.price;

    let otroSigno = signo.repeat(resta);
    return (
        <div className="tag price d-flex flex-wrap align-items-center justify-content-start">
            <div className="tag-description"><p className="text-center"><span className="active">{repetirSigno}</span><span className="sign">{otroSigno}</span></p></div>
        </div>
    )
}
