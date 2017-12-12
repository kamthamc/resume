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
  return <div className="EducationList">
      <div className="header">
          <h4><span><i className="material-icons">library_books</i></span>Education</h4>
      </div>
      <Timeline events={timeLineEvents(educationList)} className="EducationTimeline"/>
  </div>;
};

export default EducationListComponent;
