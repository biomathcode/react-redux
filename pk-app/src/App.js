import React,{Component} from 'react';
import Pratik from './pratik';
class App extends Component {
  state= {
    pratik :[
      {name:"Pratik", age:"25", belt:"black", id: 1},
      {name:"Chetan" ,age:"24" ,belt:"green", id: 2},
      {name:"Abhishek", age: "16", belt:"blue", id: 3}

    ]
  }
  render() {
    
    return (
    <div className="App">
      <h1>Hey, Pratik</h1>
      <p>Welcome</p>
      <Pratik pratik={this.state.pratik}/>
      <form>
        <input type='text' ></input>
        <input type='text'></input>
        <input type='checkbox'></input>
      </form>
    </div>
    )
}
  
}

export default App;
