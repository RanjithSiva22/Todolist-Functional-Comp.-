import React from 'react';

const Todo=({list,todos,setTodos})=>{
    const deletehandler=()=>{
        setTodos(todos.filter((el)=>el.id!==list.id));
    }

    const completehandler=()=>{

        setTodos(todos.map((item)=>{
            if(item.id===list.id){
                return {
                    ...item,
                    completed: !item.completed,
                };
            }

            return item;
        })

        );

    }

    

    return(
        <>
        <td>
        <h5 className={` ${list.completed ? "completed" : ""}`}>{list.text}</h5>
        </td>
        <td>
        <button onClick={completehandler} className="button1"><i className="glyphicon glyphicon-ok"></i></button>

        </td>
        <td>
        <button onClick={deletehandler} className="button2"><i className="glyphicon glyphicon-remove"></i></button>
        </td>
        </>
    )
}
export default Todo;

