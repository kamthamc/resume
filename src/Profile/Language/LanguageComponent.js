/**
 * @author chaitanyaK
 * @date 4/27/17
 * @description
 *
 * */

import React, { Component } from 'react';

export class LanguageComponent extends Component {

    render() {
        return (
            <div className="language">
                {this.props.language.name}
            </div>
        );
    }
}
