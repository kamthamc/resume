/**
 * @author chaitanyaK
 * @date 4/27/17
 * @description
 *
 * */

import React, {Component} from 'react';
import {FrameworkComponent} from './FrameworkComponent';

export class FrameworkListComponent extends Component {

    render() {
        return (
            <ul className="language-list">
                {
                    this.props.frameworkList.map((framework, index) => {
                        return <li key={index}><FrameworkComponent framework={framework} /></li>
                    })
                }
            </ul>
        );
    }
}
