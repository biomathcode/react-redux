import React,{Component} from 'react';
import Pratik from './pratik';
class App extends Component {
  render() {
    
    return (
    <div className="App">
      <h1>Hey, Pratik</h1>
      <p>Welcome</p>
      <Pratik name="Pratik" age="25" belt="black"/>
      <Pratik name="Chetan" age="24" belt="green"/>
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
