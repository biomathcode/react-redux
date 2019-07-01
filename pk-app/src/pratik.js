import React, { Component} from 'react';

class Pratik extends Component{
    render(){
        //console.log(this.props);
        const{name, age, belt} = this.props;
        return(
            <div className="pratik">
                <div>Name: {name}</div>
                <div>Age: {age}</div>
                <div>Belt: {belt}</div>
                <br></br>
            </div>
        )
    }
}

export default Pratik