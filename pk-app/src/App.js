import React,{Component} from 'react';
import Persons from './person';
import Addperson from './Addperson';
class App extends Component {
  state= {persons : []}
  addPerson =(person) => {
    person.id = Math.random();
    let persons = [...this.state.persons, person]
    this.setState({
      persons: persons
    })
  }
  deletePerson =(id) =>{
    let persons = this.state.persons.filter(person => {
      return person.id !== id
    })
    this.setState({
      persons:persons
    })
  }
  render() {
    return (
    <div className="App">
      <h1><u>Hey, Pratik</u></h1>
      <p>Welcome</p>
      <Persons deletePerson={this.deletePerson} persons={this.state.persons}/>
      <Addperson addPerson={this.addPerson} />
    </div>
    )}
}
export default App;
