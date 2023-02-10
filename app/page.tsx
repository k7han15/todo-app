"use client";

import { useState } from "react";

export default function Home() {
  // const val="Hello"
  const [val, setVal] = useState("");
  const onChangeHandler = (e: any) => {
    // console.log("value of E", e.target.value);
    setVal(e.target.value);
  };

  const [todos, settodos] = useState([
    { todoText: "Add More tasks here", completed: false },
    // { todoText: "world", completed: true },
  ]);

  const onClickHandler=(elm:any)=>{
    // console.log("mera click",elm)
    const newtodos=todos.map((tod)=>{
      // console.log("tod:",tod)
      if(tod.todoText==elm.todoText){
        tod.completed = !tod.completed
      }
      return tod
    })
    // console.log(newtodos)
    settodos(newtodos)
  }

  const addtodo=()=>{
    const newtodo={todoText:val, completed:false} ;
    const newtodos=[...todos,newtodo]
    setVal("")
    settodos(newtodos)
  }

  const deletetodo=(eas:any)=>{
    const newtodo=todos.filter((elm:any)=>{
      // console.log("e vala:",elm.todoText)
      // console.log("todos value",eas.todoText)
      if(elm.todoText == eas.todoText){
        return false
      }return true
    })
    // console.log("naya valatodo",newtodo)
    settodos(newtodo)
  }

  return (
    <>
      <h1 style={{textAlign:"center" }}>Todo-App</h1>
      <input
        type="text"
        placeholder="Type Task..."
        value={val}
        onChange={onChangeHandler}
      />
      <button onClick={addtodo} >add</button>
      <ul>
        {todos.map((e) => {
          return (
            <li style={{ color: e.completed ? "green" : "red", listStyle:"number" }}>
              <input type={"checkbox"} checked={e.completed} onChange={()=>{onClickHandler(e)}}/>
              {e.todoText}
              <button style={{marginLeft:"15px" }} onClick={()=>deletetodo(e)} >Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
