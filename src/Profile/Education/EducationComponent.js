/**
 * @author chaitanyaK
 * @date 4/27/17
 * @description
 *
 * */

import React, { Component } from 'react';
import moment from 'moment/moment';

const formatDate = (dateNum) => {
    return moment(dateNum).format('MMM YYYY')
};


export const EducationComponent = ({ education }) => (
    <div className="education">
        <a href={education.universityUrl} target="blank"><h4>{education.university}</h4></a>
        <h6>{education.location}</h6>
        <h6>{formatDate(education.begin)} - {formatDate(education.end)}</h6>
        {
            education.description &&
            <p>{education.description}</p>
        }
    </div>
);
