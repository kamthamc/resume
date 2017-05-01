/**
 * @author chaitanyaK
 * @date 4/27/17
 * @description
 *
 * */

import React, { Component } from 'react';
import moment from 'moment';

import './ExperienceComponent.css';

export class ExperienceComponent extends Component {

    render() {
        const experience = this.props.experience;
        const begin = moment(experience.begin, 'X').format('MMM YYYY');
        const end = experience.end ? moment(experience.end, 'X').format('MMM YYYY') : 'Present';
        return (
            <div className="experience">
                <div className="info">
                    <div>
                        <p>{experience.role}</p>
                        <p>
                            <a target="blank"
                               href={experience.companyUrl}>{experience.company}</a>, {experience.location}
                        </p>
                    </div>
                    <div>{begin} - {end}</div>
                </div>
                <div className="responsibilities">
                    <ul>
                        {
                            experience.noteList.map((note, index) => <li key={index}>{note}</li>)
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
