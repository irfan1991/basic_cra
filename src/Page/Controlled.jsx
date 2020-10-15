import React from 'react'

export default function Controlled() {
    const [name, setName] = React.useState('')
    const [isMember, setIsMember] = React.useState(false)
    const [gender, setGender] = React.useState(0)
    const [comment, setComment] = React.useState('')
    const [category, setCategory] = React.useState('')

    const HandleSubmit = event => {
        event.preventDefault();
        //kirim data
        const formData = {name, isMember, gender, comment, category}
        console.log(formData)
    }
    return (
        <div>
            <form action="" onSubmit={HandleSubmit}>
                <label htmlFor="">
                    Name :
                    <input type="text" name="" id="" value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
                <label htmlFor="">
                    Member :
                    <input type="checkbox" checked={isMember} onChange={(e) => setIsMember(e.target.checked)}/>
                </label>
                <label htmlFor="">
                    Gender :
                    <input type="radio" name="gender" checked={gender == 1} onChange={(e) => setGender(1)}/> Male
                    <input type="radio" name="gender" checked={gender == 2} onChange={(e) => setGender(2)}/> Female
                </label>
                <label htmlFor="">
                    Comments :
                    <textarea value={comment} onChange={(e) => setComment(e.target.value)} cols="30" rows="10"></textarea>
                </label>
                <label htmlFor="">
                    category :
                    <select value={category}  onChange={(e) => setCategory(e.target.value)}>
                        <option value="food">Food</option>
                        <option value="drink">drink</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}
