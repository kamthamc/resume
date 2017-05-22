/**
 * @author chaitanyaK
 * @date 4/27/17
 * @description
 *
 * */

import React, { Component } from 'react';
import {EducationComponent} from './EducationComponent';

export class EducationListComponent extends Component {

    render() {
        return (
            <div className="education-list">
                <h4>Education</h4>
                {
                    this.props.educationList.map((education, index) => {
                        return <EducationComponent education={education} key={index}/>;
                    })
                }
            </div>
        );
    }
}
