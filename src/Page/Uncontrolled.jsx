import React from 'react'

export default function Uncontrolled() {
    const inputName = React.useRef(null)
    const inputPhoto = React.useRef(null)

    const handleSubmit = event => {
        event.preventDefault()
        //kirim data form
        alert(inputName.current.value)
        //File api untuk dapat nilai nama file
        alert(inputPhoto.current.files[0].name)

    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">
                    Name : <input type="text" defaultValue="Daffa" ref={inputName}/>
                </label>
                <label htmlFor="">
                    Photo : <input type="file" ref={inputPhoto}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}
