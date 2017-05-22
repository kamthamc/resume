/**
 * @author chaitanyaK
 * @date 4/27/17
 * @description
 *
 * */

import React, { Component } from 'react';
import moment from 'moment';

import './EducationComponent.css';

export class EducationComponent extends Component {

    render() {
        const education = this.props.education;
        const begin = moment(education.begin, 'X').format('MMM YYYY');
        const end = moment(education.end, 'X').format('MMM YYYY');
        return (
            <div className="education">
                <div>
                    <p>
                        <a target="blank" href={education.universityUrl}>{education.university}</a>, {education.location}
                    </p>
                    <p>{education.summary}</p>
                </div>
                <div>{begin} - {end}</div>
            </div>
        );
    }

    shouldComponentUpdate() {
        return false; // This prevents future re-renders of this component
    }
}
