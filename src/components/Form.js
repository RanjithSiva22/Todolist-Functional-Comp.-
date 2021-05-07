import React from 'react';

const Form =({setInput,todos,input,setTodos,setStatus})=>{

    const addinput=(e)=>{
        setInput(e.target.value);

    }
    const addTodos=(e)=>{
        e.preventDefault();
        setTodos([...todos,{text:input,completed:false,id:Math.random()*1000}]);
        setInput("");

    }
    const statusHandler=(e)=>{
        setStatus(e.target.value);
    }
   
    return (
        

        <div className="container">
            <div className="row">

                <div className="col-4">
                <input type="text" onChange={addinput} className="form-control input" value={input} placeholder="" />
                <button type="button" onClick={addTodos} className="btn btn-primary">ADD</button>
                </div>

                <div className="col-4">
                <select onChange={statusHandler} name="filter">
                <option value="all">all</option>
                <option value="completed">completed</option>
                <option value="uncompleted">uncompleted</option>
                </select>
                
                </div>

            </div>
            
            
        </div>
            
        
    )
}

export default Form;