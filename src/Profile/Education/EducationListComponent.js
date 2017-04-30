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
            <ul className="education-list">
                {
                    this.props.educationList.map((education, index) => {
                        return <EducationComponent education={education} key={index}/>;
                    })
                }
            </ul>
        );
    }
}
