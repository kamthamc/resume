/**
 * @author chaitanyaK
 * @date 4/27/17
 * @description
 *
 * */

import React, { Component } from 'react';
import {ProjectComponent} from './ProjectComponent';

export class ProjectListComponent extends Component {

    render() {
        return (
            <div className="project-list">
                <h4>Projects</h4>
                {
                    this.props.projectList.map((project, index) => {
                        return <ProjectComponent project={project} key={index}/>;
                    })
                }
            </div>
        );
    }
}
