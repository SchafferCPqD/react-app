import React from 'react'
import './style.scss';

const Button = ({titulo, onClick}) => {
    return (
        <button className="my-button" onClick={onClick}>titulo</button>
    )
}

export default Button
