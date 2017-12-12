import React from 'react';
import PropTypes from 'prop-types';

import './Timeline.css';
import moment from 'moment/moment';

const formatDate = (dateNum) => {
    return moment(dateNum).format('MMM YYYY')
};

const Timeline = (props) => {
    return (
        <div className="Timeline">
            {
                props.header &&
                (
                    <div className="header">
                        <i className="material-icons">{props.header.icon}</i> {props.header.title}
                    </div>
                )
            }
            {
                props.events.map((event, index) => (
                    <div className="timelineBlock" key={event.id}>
                        <div className="timelineDot"><h6>{event.time}</h6></div>
                        <div className="timelineContent">{event.content}</div>
                    </div>
                ))
            }

        </div>
    );
};

Timeline.propTypes = {};
Timeline.defaultProps = {};

export default Timeline;
