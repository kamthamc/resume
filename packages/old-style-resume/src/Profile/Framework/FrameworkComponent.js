/**
 * @author chaitanyaK
 * @date 4/27/17
 * @description
 *
 * */

import React, { Component } from 'react';

export class FrameworkComponent extends Component {

    render() {
        return (
            <div className="framework">
                {this.props.framework.name}
            </div>
        );
    }
}
