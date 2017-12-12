import React from 'react';
import PropTypes from 'prop-types';

import './Timeline.css';
import moment from 'moment/moment';


const Timeline = (props) => {
    return (
        <div className={`Timeline ${props.className}`}>
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
                        <div className="timelineDot"><h6>{event.pointer}</h6></div>
                        <div className="timelineContent">{event.content}</div>
                    </div>
                ))
            }

        </div>
    );
};

Timeline.propTypes = {
    className: PropTypes.string,
};
Timeline.defaultProps = {
    className: ''
};

export default Timeline;
