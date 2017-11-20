/**
 * @author chaitanyaK
 * @date 4/27/17
 * @description
 *
 * */

import React, { Component } from 'react';

import { ExperienceComponent } from './ExperienceComponent';

import './ExperienceListComponent.css';

export class ExperienceListComponent extends Component {

    render() {
        return (
            <div className="experience-list-container">
                <h4><i className="fa fa-list" /> Experience: </h4>
                <ul className="experience-list">
                    {
                        this.props.experienceList.map(( skill, index ) => {
                            return (
                                <ExperienceComponent experience={skill} key={index}/>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}
