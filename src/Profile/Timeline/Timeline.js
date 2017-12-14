import React from 'react';
import PropTypes from 'prop-types';

import './Timeline.css';

const Timeline = ({ className, events }) => {
    return (
        <div className={`Timeline ${className}`}>
            {
                events.map(({ id, content, pointer }) => (
                    <div className="timelineBlock" key={id} data-id={id}>
                        <div className="timelineDot"><h6>{pointer}</h6></div>
                        <div className="timelineContent">{content}</div>
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
