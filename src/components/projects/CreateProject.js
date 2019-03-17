import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import {Redirect} from 'react-router-dom'

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        // console.log('CreateProject-SubmitClick')
        // console.log(this.state)
        // console.log('-----------------')

        e.preventDefault();
        this.props.createProject(this.state)
    }
    render() {
        const {auth}=this.props;
        if(!auth.uid)return <Redirect to='/signin'/>
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea onChange={this.handleChange} id="content" className="materialize-textarea"></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps= (state) =>{
    return {
        auth:state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    // console.log('CreateProject-mapDispatchToProps Run')
    // console.log('------------------')

    return {
        createProject: (project) => {
            // console.log(project)
            dispatch(createProject(project))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
