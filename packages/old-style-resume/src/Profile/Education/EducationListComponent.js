/**
 * @author chaitanyaK
 * @date 4/27/17
 * @description
 *
 * */

import React from 'react';
import { EducationComponent } from './EducationComponent';
import Timeline from '../Timeline/Timeline';

import './EducationListComponent.css';

const timeLineEvents = (data) => {
    const events = [];
    data.forEach(education => events.push({
        content: <EducationComponent education={education}/>,
        pointer: education.degree[0],
        id: education.end,
    }));
    return events;
};

const EducationListComponent = ({ educationList }) => {
  return (
      <div className="EducationList">
          <div className="header">
              <h4><span><i className="material-icons">library_books</i></span>Education</h4>
          </div>
          <Timeline events={timeLineEvents(educationList)} className="EducationTimeline"/>
      </div>
  );
};

export default EducationListComponent;
