/**
 * @author chaitanyaK
 * @date 4/27/17
 * @description
 *
 * */

import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

import { EducationListComponent } from './Education/EducationListComponent';
import { ProjectListComponent } from './Project/ProjectListComponent';
import { ExperienceListComponent } from './Experience/ExperienceListComponent';
import {LanguageListComponent} from './Language/LanguageListComponent';

import './ProfileComponent.css';
import {FrameworkListComponent} from './Framework/FrameworkListComponent';

const style = {
    margin: '10px auto',
    padding: '10px',
    width: '80%',
    height: '100%',
    display: 'flex'
};

export class ProfileComponent extends Component {

    render() {
        return (
            <Paper style={style}>
                <div className="profile">
                    <LanguageListComponent languageList={this.props.profile.languageList}/>
                    <FrameworkListComponent frameworkList={this.props.profile.frameworkList}/>
                    <EducationListComponent educationList={this.props.profile.educationList}/>
                    <ExperienceListComponent experienceList={this.props.profile.experienceList}/>
                    <ProjectListComponent projectList={this.props.profile.projectList}/>
                </div>
            </Paper>
        );
    }
}
