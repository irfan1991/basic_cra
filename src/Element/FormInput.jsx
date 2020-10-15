import React from 'react'
import InputText from './InputText';

export default function FormInput() {
    // const [name, setName] = React.useState('')
    // const [email, setEmail] = React.useState('')
    // const [phone, setPhone] = React.useState('')

    const [form , setForm] = React.useState({
        name :'',
        email : '',
        phone : ''
    })

    const [error , setError] = React.useState({
        name :'name minimal 3 karakter',
        email : 'email minimal 3 karakter',
        phone : 'phone minimal 3 karakter'
    })

    const HandleSubmit = event => {
        event.preventDefault();
        //kirim data
        // alert(`
        //     name : ${name}
        //     email : ${email}
        //     phone : ${phone}
        // `)
        // alert(JSON.stringify(form))

        if (error['name'].length > 0) {
            alert(error['name'])
        } else if(error['email'].length > 0){
            alert(error['email'])
        } else if(error['phone'].length > 0){
            alert(error['phone'])
        } else {
            alert('validasi sukses')
        }
    }

    const handleChange = (field, e) =>{
        //validasi disini
        setError('')
        const value = e.target.value
        if (value.length < 3) {
            setError({...error, [field] : `${field} minimal 3 karakater`})
        } else {
            setError({...error, [field] : ''})
        }
        setForm({...form, [field]: value})
        }

    return (
      <form onSubmit={HandleSubmit}>
          {/* <InputText label="Name" value={name} onChange={(e) => setName(e.target.value)}/>
          <InputText label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
          <InputText label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/> */}
          <div>
            {error.name} <br />
            <InputText label="Name" value={form.name} onChange={(e) => handleChange('name', e)}/>
         </div>
         <div>
            {error.phone} <br />
            <InputText label="Phone" value={form.phone} onChange={(e) => handleChange('phone', e)}/>
         </div>
         <div>
            {error.email} <br />
            <InputText label="Email" value={form.email} onChange={(e) => handleChange('email', e)}/>
         </div>
          
          
          <input type="submit" value="Submit"/>
      </form>
    )
}
