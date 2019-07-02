import React, { Component} from 'react';

class Pratik extends Component{
    render(){
        const {pratik} = this.props;
        const pratikList = pratik.map(pratik => {
            return (
            <div className="pratik" key={pratik.id}>
                <div>Name: {pratik.name}</div>
                <div>Age: {pratik.age}</div>
                <div>Belt: {pratik.belt}</div>
                <br></br>
            </div>
            )
        })
        return(
            <div className="pratik-list">
                {pratikList}
            </div>
        )
    }
}

export default Pratik