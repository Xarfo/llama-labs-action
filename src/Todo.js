import React from "react"


export default function Todo({todo}){
  return(
    <>
    <label>
    <input type = "checkbox" checked = {todo.complete}  />
    {todo.name}
    </label>
    
    </>
  )
}