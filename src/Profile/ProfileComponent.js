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
                    <div className="info">
                        <div className="details">
                            <h1>Chaitanya Kumar Kamatham</h1>
                            <div>
                                <i className="material-icons">mail</i> k.chaitanya_kumar@yahoo.com
                            </div>
                            <div>
                                <i className="material-icons">phone</i> (516) 637 - 6456
                            </div>
                            <div>
                                <a
                                    href="https://www.linkedin.com/in/kamthamc/"
                                    className="linkedin"
                                    target="blank"
                                    title="kamthamc"
                                    aria-label="linkedin"
                                >
                                    <i className="fa fa-2x fa-linkedin-square" aria-hidden="true" />
                                </a>
                                <a
                                    href="https://github.com/kamthamc"
                                    className="github"
                                    target="blank"
                                    title="kamthamc"
                                    aria-label="github"
                                >
                                    <i className="fa fa-2x fa-github-square" aria-hidden="true"/>
                                </a>
                                <a
                                    href="https://twitter.com/gangaraju4u"
                                    className="twitter"
                                    target="blank"
                                    title="gangaraju4u"
                                    aria-label="twitter"
                                >
                                    <i className="fa fa-2x fa-twitter-square"
                                       aria-hidden="true"/>
                                </a>

                            </div>
                            <div className="summary">
                                <ul>{this.props.profile.summary.map((summary, index) => <li key={index}>{summary}</li>)}</ul>
                            </div>
                        </div>
                        <img className="profile-pic" src="Assets/ProfilePic.png" alt="profile" />
                    </div>
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
