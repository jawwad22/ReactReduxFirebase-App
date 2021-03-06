import React from 'react'
import ProjectSummary from './ProjectSummery'
import { Link } from 'react-router-dom'

const ProjectList = ({ projects }) => {
    return (
        <div className="project list section">
            {projects && projects.map(project => {
                return (
                    <div key={project.id}>              
                          <Link to={'/project/' + project.id}>
                        <ProjectSummary project={project} key={project.id} />
                    </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectList