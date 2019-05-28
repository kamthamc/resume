/**
 * @author chaitanyaK
 * @date 4/27/17
 * @description
 *
 * */

import React from 'react';
import moment from 'moment/moment';

const formatDate = (dateNum) => {
    if(dateNum) {
        return moment(dateNum).format('MMM YYYY')
    }
    return 'Current';
};

export const ExperienceComponent = ({ experience }) => (
    <div className="experience">
        <a href={experience.companyUrl} target="blank"><h4>{experience.company}</h4></a>
        <h6>{experience.location}</h6>
        <h6>{formatDate(experience.begin)} - {formatDate(experience.end)}</h6>
        {
            experience.noteList.map((note, index) => {
                return <p key={index} className="note">{note}</p>
            })
        }
    </div>
);

