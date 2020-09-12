import React, { Component } from 'react'

export default class TodoApp extends Component {

  state={
      input:"",
      item:  []
  }
  onHandle=(event)=>{
      this.setState({
          input:event.target.value
      })

  }
  onItemStorage=(event)=>{
      event.preventDefault()
      const {input}=this.state
      this.setState({
          item:[...this.state.item,input],
          input:""
        })

  }
  onDelete=(key)=>{
      this.setState({
          item:this.state.item.filter((data,index)=> index!==key)
      })
  }


    render() {
        const {input,item }=this.state
        console.log(this.state.edit)
        return (
            <div className="todo-container">
                
                
                <form className="input-box" onSubmit={this.onItemStorage}>
                <h2>Todoapp</h2>
                    <input type="text" value={input} onChange={this.onHandle} placeholder="Enter.." />
                    

                </form>
                <ul>
                   
                   {item.map((data,index)=>(
                       <li key={index}>
                           {data}<i className="far fa-edit" ></i><i className="fas fa-trash-alt" onClick={()=>this.onDelete(index)} ></i>
                       </li>
                   ))}
                   
                    
                </ul>
    
     
            </div>
                          
        )
    }
}
