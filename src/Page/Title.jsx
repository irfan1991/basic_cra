import React from 'react'

export default function Title({a}) {
    // let variablelain= 'text'
    // const b = null
    // const c = false
    // const d = ' '
    // const e = 0
    // return (
       
    //     <div>
    //         <h1>{variablelain}</h1>
    //         <div>a - undifined : {a}</div>
    //         <div>b - null : {b}</div>
    //         <div>c - true/false : {c}</div>
    //         <div>d - empty/white space: {d}</div>
    //         <div>e - 0 :  {e}</div>
    //     </div>
    // )

    const isLogin = true
    const userName = 'JUlia'
    return <div>{isLogin ? <b>{userName} sudah login</b> : <b>silahkan login</b>}</div>
    // return <div>{isLogin && 'user sudah login'}</div>
    // if (isLogin) return <div>Anda sudah login</div>
    // else return <div>Silahkan login</div>
}
