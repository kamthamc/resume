/**
 * @author chaitanyaK
 * @date 4/27/17
 * @description
 *
 * */

import React, {Component} from 'react';
import {FrameworkComponent} from './FrameworkComponent';
import './FrameworkListComponent.css';

export class FrameworkListComponent extends Component {

    render() {
        return (
            <div className="framework-list-container">
                <h4><i className="fa fa-rocket" /> Frameworks: </h4>
                <ul className="framework-list">
                    {
                        this.props.frameworkList.map((framework, index) => {
                            return <li key={index}><FrameworkComponent framework={framework} /></li>
                        })
                    }
                </ul>
            </div>
        );
    }
}
