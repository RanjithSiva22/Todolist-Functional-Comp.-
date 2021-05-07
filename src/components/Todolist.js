import React from 'react';
import Todo from './Todo';

const Todolist=({todos,setTodos,filtertodos})=>{
    
    return(
        
        <div className="container">
        <table className="table table-bordered table-dark">
    
        
        {
        filtertodos.map((list)=>(
            <tr>
                <Todo
                setTodos={setTodos}

                todos={todos}
                list={list}
                />
            </tr>
        ))
        }
        </table>

        </div>
    )

}
export default Todolist;