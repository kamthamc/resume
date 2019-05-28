/**
 * @author chaitanyaK
 * @date 4/27/17
 * @description
 *
 * */

import React, { Component } from 'react';
import {ProjectComponent} from './ProjectComponent';
import './ProjectListComponent.css';

export class ProjectListComponent extends Component {

    render() {
        return (
            <div className="framework-list-container">
                <h4>Projects: </h4>
                <ul className="project-list">
                    {
                        this.props.projectList.map((project, index) => {
                            return <ProjectComponent project={project} key={index}/>;
                        })
                    }
                </ul>
            </div>
        );
    }
}
