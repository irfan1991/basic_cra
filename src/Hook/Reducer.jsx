import React ,{useReducer} from 'react'

let reducer = (state, action) {
    switch (action.type) {
        case 'INCREMENT':
            
            return state + 1;
    
        case 'DECREMENT':
            
            return state - 1;
    
        
        default:
            return state
    }
}

export default function Reducer(props) {
    const [counter, dispatch] = useReducer(reducer, 0)
    return (
        <div>
            
            <button onClick={e => dispatch({type : 'DECREMENT'})}> - </button>
            {counter}
            <button onClick={e => dispatch({type : 'INCREMENT'})}> + </button>
        </div>
    )
}
