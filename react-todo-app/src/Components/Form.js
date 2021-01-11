import React from "react";        
        
export default function Form(props){
    return(
        <form>
        
              <input style={{height: "40px", width: "200px"}} type="text" value={props.text} onChange={props.updateInput} placeholder="Enter todo" maxlength="22"></input>
              <button class="App-button" onClick={props.getInput}><b>+</b> Add</button>
        
              
              
              <br></br>
              <br></br>

              <div style={{width: "200px", display: "inline-block"}}>
                <label>Filter by status</label>
              </div>
              
              <select className="App-button" id="filter" onChange={props.updateFilter}>
                <option value="none">all</option>
                <option value="open">open</option>
                <option value="done">done</option>
              </select>
                
        </form>
    )
} 