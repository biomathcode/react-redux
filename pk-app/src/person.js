import React from 'react';

const Persons= ({persons, deletePerson}) => {
    const personList = persons.map(person => {
        if (person.age > 2){
            return (
                <div className="person" key={person.id}>
                    <div>Name: {person.name}</div>
                    <div>Age: {person.age}</div>
                    <div>Belt: {person.belt}</div>
                    <button onClick={() => {deletePerson(person.id)}}>Delete</button>
                    <br></br>
                </div>
            )
        } else {
            return null
        }
        })
    return(
        <div className="person-list">
            {personList}
        </div>
    )
}

export default Persons