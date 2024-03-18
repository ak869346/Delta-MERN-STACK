import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
function TodoList() {
    let [todos, setTodos] = useState([{task:"Sample task",id:uuidv4(),isDone:false}]);
    let [newTodo,setNewTodo] = useState("");

    let addtask = ()=> {
        setTodos((prevTodos)=> {
            return [...prevTodos,{task:newTodo,id:uuidv4(),isDone:false}]
        });
        setNewTodo("");
    }

    let updateTodo = (event)=> {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id)=> {
        setTodos((prevTodos)=>todos.filter((prevTodos)=> prevTodos.id!=id));
    }

    let markAllDone = ()=> {
        setTodos(todos.map((todo)=> {
            console.log(todo);
            return {
                ...todo,
                isDone:true,
            };
        }));
    }

    let markAsDone = (id)=> {
        setTodos(todos.map((todo)=> {
            if(todo.id==id) {
                return {
                    ...todo,
                    isDone:true,
                };
            }
            else {
                return todo;
            }
        }));
    }

    let markAsUnDone = (id)=> {
        setTodos(todos.map((todo)=> {
            if(todo.id==id) {
                return {
                    ...todo,
                    isDone:false,
                };
            }
            else {
                return todo;
            }
        }));
    }
    return (
        <div id="main">
            <h1>Enter the task to add.</h1>
            <input placeholder='Add a task' value={newTodo} onChange={updateTodo}></input>
            <br></br>
            <br></br>
            <button onClick={addtask}>Add task</button>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <h1>Task for Today</h1>
            <ul>
                {
                    todos.map((todo)=> {
                        return <li key={todo.id}>
                            <span style={todo.isDone ? {textDecorationLine:"line-through", color:"red"} : {}}>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={()=> deleteTodo(todo.id)}>Delete</button>
                            &nbsp;&nbsp;
                            <button onClick={()=> markAsDone(todo.id)}>Mark as Done</button>
                            &nbsp;&nbsp;
                            <button onClick={()=> markAsUnDone(todo.id)}>Mark as UnDone</button>
                        </li>
                    })
                }
            </ul>
            <hr></hr>
            <br></br>
            <button onClick={markAllDone}>Mark All Done</button>
        </div>
    );
}

export default TodoList;