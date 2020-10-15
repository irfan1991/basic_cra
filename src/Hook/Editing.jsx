import React ,{useState, useEffect} from 'react'

export default function Editing() {

    let [text, setText] = useState("")

    let [seconds, setSeconds] = useState(0);

    useEffect(function(){
        console.log('Sinkronisasi ke localstoraage');
        
            if (text) localStorage.setItem("edit-text",text);
    }, [text]);

  useEffect(function(){
            setText(localStorage.getItem("edit-text"));

           let Intervalid =  setInterval(() => {
                setSeconds(detik => detik + 1)
            }, 1000);

            //clean up func
            return function (params) {
                clearInterval(Intervalid)
            }
    }, []);

    return(
        <>
        Waktu : {Math.floor(seconds/60)} menit {seconds % 60} detik
    
        <br />
        <textarea  type="text" value={text} 
        onChange={e => setText(e.target.value)}
        />
        </>
    )
  
   
}
