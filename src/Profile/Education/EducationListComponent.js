/**
 * @author chaitanyaK
 * @date 4/27/17
 * @description
 *
 * */

import React, { Component } from 'react';
import {EducationComponent} from './EducationComponent';
import './EducationListComponent.css';

export class EducationListComponent extends Component {

    render() {
        return (
            <div className="education-list-container">
                <h4><i className="fa fa-university" /> Education: </h4>
                <ul className="education-list">
                    {
                        this.props.educationList.map((education, index) => {
                            return <EducationComponent education={education} key={index}/>;
                        })
                    }
                </ul>
            </div>
        );
    }
}
