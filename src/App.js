
import React from 'react';
import './App.css'
 class App extends React.Component{
  constructor(){
    super()
    this.state={text:''}

  }

  handlechange(event){
    var tt = event.target.value;
    this.setState({text:tt})
  }

 
  render(){
    return <div className="tim">
      <h1>TIMER</h1>
      <form>
        <input onChange={this.handlechange.bind(this)} value={this.state.text}placeholder="secand"/>
        <button onSubmit={this.handlechange.bind(this)}>supp</button>
      </form>
      <div className="tow"><h3>Heure:{Math.floor(this.state.text/3600)}</h3>
      <h3>Minute:{Math.floor((this.state.text%3600)/60)}</h3>
      
      <h3>seconds:{(this.state.text%60)}</h3></div></div>

    
  }
} 
export default App