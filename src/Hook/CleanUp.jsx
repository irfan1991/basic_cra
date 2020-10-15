import React, {useState, useEffect} from 'react'

export default function CleanUp(props) {

    let [friend, setFriend] = useState(null)

    useEffect(() =>{
        if (!friend) return;
        console.log(`EFFECT SUbscribe Message berasal dari ${friend}`);

        return () => {
            console.log(`CLEAN UP : unsuscribe message dari ${friend}`);
            
        }
        
    }, [friend]);


    friend && console.log(`RENDER : friend ${friend}`);
    
    return (
        <div>
            <button onClick={e => setFriend("Tania")}>Tania</button> 
            <button onClick={e => setFriend("Diva")}>Diva</button>
            <br /><br />
            {friend ? `friend ${friend}` : "no opened friend"}           
        </div>
    )
}
