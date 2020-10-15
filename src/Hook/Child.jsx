import React, { useContext } from 'react'
import {TemaSitus} from '../App.js'
export default function Child() {

    let tema = useContext(TemaSitus)
    return (
        <div>
            Tema situs sekarang adalah {tema}
        </div>
    )
}
