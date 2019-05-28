/**
 * @author chaitanyaK
 * @date 4/27/17
 * @description
 *
 * */

import React from 'react';
import moment from 'moment/moment';

const formatDate = (dateNum) => {
    return moment(dateNum).format('MMM YYYY')
};


export const EducationComponent = ({ education: {
    universityUrl,
    university,
    location,
    degree,
    begin,
    end,
    description

} }) => (
    <div className="education">
        <a href={universityUrl} target="blank"><h4>{university}</h4></a>
        <h6>{location}</h6>
        <h6>{degree}</h6>
        <h6>{formatDate(begin)} - {formatDate(end)}</h6>
        {
            description &&
            <p>{description}</p>
        }
    </div>
);
