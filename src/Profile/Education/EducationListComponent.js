/**
 * @author chaitanyaK
 * @date 4/27/17
 * @description
 *
 * */

import React, { Component } from 'react';
import {EducationComponent} from './EducationComponent';
import './EducationListComponent.css';
import Timeline from '../Timeline/Timeline';
import moment from 'moment/moment';

const formatDate = (dateNum) => {
    return moment(dateNum).format('MMM YYYY')
};


const timeLineEvents = (data) => {
    const events = [];
    data.forEach(education => events.push({
        content: <EducationComponent education={education}/>,
        pointer: formatDate(education.begin),
        id: education.end,
    }));
    return events;
};

const EducationListComponent = ({ educationList }) => {
  return <Timeline events={timeLineEvents(educationList)} className="EducationTimeline"/>;
};

export default EducationListComponent;
