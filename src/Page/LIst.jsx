import React from 'react'

export default function LIst() {
    const users = [
        {id:1,name:'Albert', gender:'male'},
        {id:2,name:'Romy', gender:'male'},
        {id:3,name:'Shinta', gender:'female'},
        {id:4,name:'Feny', gender:'female'},
        {id:5,name:'Desta', gender:'male'},
                ]
 
// const displayUser = users.map((user) => <li key={user.id}>{user.name} ({user.gender})</li>)
const alert = ()=> window.alert(123)
const ubah = (obj) => {
    const btn = obj.target
    btn.innerText = 'Clicked'
}
    return (
        <div>
           {/* <ul> {displayUser}</ul> */}
           <table border='1'>
               <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Gender</th>
                    </tr>
               </thead>
               <tbody>
                   {users.length > 0 && users.map(user => {
                       const {id, name, gender} = user
                       return <tr key={id}>
                           <td>{id}</td>
                            <td>{name}</td>
                            <td>{gender}</td>
                       </tr>
                   })}
               </tbody>
           </table>
           <button onClick={ubah}>info</button>
        </div>
    )
}
