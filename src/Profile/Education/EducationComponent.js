/**
 * @author chaitanyaK
 * @date 4/27/17
 * @description
 *
 * */

import React, { Component } from 'react';
import * as moment from 'moment';

const formatDate = (dateNum) => {
    return moment(dateNum).format('MMM YYYY')
};

export class EducationComponent extends Component {

    render() {
        let {education} = this.props;
        return (
            <li className="education">
                <p>
                    <a href={education.universityUrl} target="blank"><span>{education.university}</span></a> at
                    <span>{education.location}</span>
                    <span>[ {formatDate(education.begin)} - {formatDate(education.end)} ]</span>
                    <span>GPA: {education.gpa}</span>
                </p>
            </li>
        );
    }
}
