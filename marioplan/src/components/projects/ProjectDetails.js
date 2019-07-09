import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title- {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod soluta in laborum tenetur? Fugit, odio vero! Commodi esse facilis, architecto, ratione, eum minus ipsa possimus libero animi eius aperiam.</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by Pratik Sharma</div>
                    <div>9th of july </div>
                </div>
            </div>
            
        </div>
    )
}

export default ProjectDetails
