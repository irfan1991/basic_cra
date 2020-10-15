import React from 'react'
import style from './Button.module.scss';


export default function Style(props) {
    const style = {color : 'red', fontWeight:'bold'}
    return (
        // <div>
        //     {/* <h1 style={style}>Belajar Styling</h1> */}
        //     <h1 className="title">Belajar Styling</h1>
        // </div>
        <button className={style.default}>
            {props.children}
        </button>
    )
}
