import React from "react";

function List(props){
    let displayList = props.todoArray.map((task,i)=>(
        <div key={i}>
            <span>{task}  </span>
            <button onClick={()=>props.removeTask(task)}><strong>X</strong></button>
        </div>
    ))
    return(
        <div>
            {displayList}
        </div>
    )
}

export default List;