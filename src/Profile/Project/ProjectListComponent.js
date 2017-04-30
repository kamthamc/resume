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
            <ul className="project-list">
                {
                    this.props.projectList.map((project, index) => {
                        return <ProjectComponent project={project} key={index}/>;
                    })
                }
            </ul>
        );
    }
}
