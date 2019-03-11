import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose } from 'redux'

const ProjectDetail = (props) => {
    const id=props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title-{id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quam porro consequatur, fuga eaque blanditiis placeat id, quasi recusandae soluta nam, illo dicta voluptate amet modi illum cumque sequi repellendus.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Net Ninja</div>
                    <div>2nd Sept</div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps=(state,ownProps)=>{
    const id=ownProps.match.params.id
    const projects=state.firestore.data.projects;
    return{
    }
}

export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        {collection:'projects'}
    ])
)
(ProjectDetail)
