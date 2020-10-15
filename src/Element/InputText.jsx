import React from 'react'

export default function InputText({label ,value, onChange}) {
    
    return (
        
              <label >
                    {label} :
                    <input type="text" name="" id="" defaultValue={value} onChange={onChange}/>
                </label>
        
    )
}
