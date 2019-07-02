import React, {Component} from 'react';

class Addperson extends Component{
    state ={
        name: null,
        age: null,
        belt: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPerson(this.state);
    }
    render(){

        return(
            <div className='Addperson'>
                <br></br>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id="name" onChange={this.handleChange}></input>
                    <br></br>
                    <label htmlFor='age'>Age:</label>
                    <input type='text' id="age" onChange={this.handleChange}></input>
                    <br></br>
                    <label htmlFor='belt'>Belt:</label>
                    <input type='text' id="belt" onChange={this.handleChange}></input>
                    <br></br>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default Addperson