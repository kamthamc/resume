/**
 * @author chaitanyaK
 * @date 4/27/17
 * @description
 *
 * */

import React, { Component } from 'react';
import * as moment from 'moment';

const formatDate = (dateNum) => {
    if(dateNum) {
        return moment(dateNum).format('MMM YYYY')
    }
    return 'Current';
};

export class ExperienceComponent extends Component {

    render() {
        let { experience } = this.props;
        return (
            <li className="experience">
                <p>
                    <a href={experience.companyUrl} target="blank"><span>{experience.company}</span></a> at
                    <span>{experience.location}</span>
                    <span>[ {formatDate(experience.begin)} - {formatDate(experience.end)} ]</span>
                </p>
                <ul>
                    {experience.noteList.map((note, index) => {
                        return <li key={index}>{note}</li>
                    })}
                </ul>
            </li>
        );
    }
}
