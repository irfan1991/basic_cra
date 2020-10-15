import React , {useEffect, useState, useCallback, useMemo, useReducer}from 'react'

export default function Komponenku(props) {
    const [menu, setMenu] = useState([]);
    const fecthMenu = useCallback(
        () => {
            return ['nasi padang', 'nasi padang', 'nasi gudeg'];
        },
        [],
    );

    let menu = useMemo(() => {
        if(props.wilayah === 'bali') return ['ayam betutu'];
        return fecthMenu();
    }, [props.wilayah])

    useEffect(() => {
      

        let data = fecthMenu();
        setMenu(data)
        // return () => {
        //     cleanup
        // };
    }, [fecthMenu]);

    

    const [state, dispatch] = useReducer(reducer, initialState, init)
    return (
        <div>
        {data.map(makanan => <div>{makanan}</div>)}        
        </div>
    )
}
