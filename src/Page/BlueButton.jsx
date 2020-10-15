import React from 'react'

export default function BlueButton({onCustomeClick, caption}) {

    return (
        <div>
            <button style-={{border:'2px solid blue'}} onClick={onCustomeClick}>{caption}</button>
        </div>
    )
}
