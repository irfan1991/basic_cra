import React from 'react'


function reducer(todos, action) {
    
    switch (action.type) {
        case 'ADD_TODO':
            let nextId = todos.length ? todos[todos.length - 1].id + 1 : 1;
            return [...todos, {id: nextId, completed: false, ...action.todo}];
    
        default:
            return todos;
    }
}

dispatch({
    type: 'ADD_TODO',
    todo :{
        title : 'Belajar Hook'
    }
})
export default function TodoList() {
    return (
        <div>
            
        </div>
    )
}
