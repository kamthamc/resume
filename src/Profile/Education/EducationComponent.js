/**
 * @author chaitanyaK
 * @date 4/27/17
 * @description
 *
 * */

import React, { Component } from 'react';

export class EducationComponent extends Component {

    render() {
        return (
            <div className="education">
                {this.props.education.university}
            </div>
        );
    }
}
