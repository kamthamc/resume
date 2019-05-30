/**
 * @author chaitanyaK
 * @date 4/27/17
 * @description
 *
 * */

import React from 'react';

import moment from 'moment/moment';
import { ExperienceComponent } from './ExperienceComponent';
import Timeline from '../Timeline/Timeline';

import './ExperienceListComponent.css';

const formatDate = dateNum => {
  return moment(dateNum).format('MMM YYYY');
};

const timeLineEvents = data => {
  const events = [];
  data.forEach(experience =>
    events.push({
      content: <ExperienceComponent experience={experience} />,
      pointer: formatDate(experience.begin),
      id: experience.end || 'current'
    })
  );
  return events;
};

export const ExperienceListComponent = ({ experienceList }) => {
  return (
    <div className="EducationList">
      <div className="header">
        <h4>
          <span>
            <i className="material-icons">work</i>
          </span>
          Experience
        </h4>
      </div>
      <Timeline
        events={timeLineEvents(experienceList)}
        className="ExperienceTimeline"
      />
    </div>
  );
};
