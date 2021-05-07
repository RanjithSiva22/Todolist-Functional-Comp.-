import React ,{useState,useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Todolist from './components/Todolist';


function App() {
  const [input,setInput]=useState('');
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState('all');
  const [filtertodos,setFiltertodos]=useState([]);

  useEffect(()=>{
    getlocaltodos();
  },[]);

  useEffect(()=>{
    savelocaltodos();
    filterhandler();
    
  },[todos,status]);

  const filterhandler=()=>{
    switch(status){
         case 'completed':
            setFiltertodos(todos.filter((todo)=>todo.completed===true));
            break;
         case 'uncompleted':
             setFiltertodos(todos.filter((todo)=>todo.completed===false));
             break;
         default:
             setFiltertodos(todos);
             break;
          
    }
}

const savelocaltodos=()=>{
  
      localStorage.setItem("todos",JSON.stringify(todos));
};

const getlocaltodos=()=>{
  if(localStorage.getItem("todos")===null){
      localStorage.setItem("todos",JSON.stringify([]));
  }
  else{
      let todolocal=JSON.parse(localStorage.getItem("todos"));
      setTodos(todolocal);
  }
};

  return (
    <div className="App">
      <div className="topic">
      <header>TODO-LIST</header>
      </div>
      <div className="form">
      <Form todos={todos} 
            input={input} 
            setTodos={setTodos} 
            setInput={setInput}
            setStatus={setStatus}
      />
      </div>
      

      <Todolist 
      todos={todos} 
      setTodos={setTodos}
      filtertodos={filtertodos}
      />
    </div>
  );
}

export default App;
