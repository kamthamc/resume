/**
 * @author chaitanyaK
 * @date 4/27/17
 * @description
 *
 * */

import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

import { EducationListComponent } from './Education/EducationListComponent';
// import { ProjectListComponent } from './Project/ProjectListComponent';
import { ExperienceListComponent } from './Experience/ExperienceListComponent';
import {LanguageListComponent} from './Language/LanguageListComponent';
import {FrameworkListComponent} from './Framework/FrameworkListComponent';


import './ProfileComponent.css';


export class ProfileComponent extends Component {

    render() {
        return (
            <Paper >
                <div className="profile">
                    <div className="info">
                        <div className="details">
                            <header className="animated fadeIn">

                                <h1>Chaitanya Kumar Kamatham</h1>
                                <div>
                                    <i className="material-icons">mail</i> k.chaitanya_kumar@yahoo.com
                                </div>
                                <div>
                                    <i className="material-icons">phone</i> (516) 637 - 6456
                                </div>
                                <div>
                                    <h5>Social Profiles</h5>
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
                            </header>
                            <h4>Summary</h4>
                            <div className="summary">
                                <ul>{this.props.profile.summary.map((summary, index) => <li key={index}>{summary}</li>)}</ul>
                            </div>
                        </div>
                        {/*<img className="profile-pic" src="Assets/ProfilePic.png" alt="profile" />*/}
                    </div>
                    <LanguageListComponent languageList={this.props.profile.languageList}/>
                    <FrameworkListComponent frameworkList={this.props.profile.frameworkList}/>
                    <EducationListComponent educationList={this.props.profile.educationList}/>
                    <ExperienceListComponent experienceList={this.props.profile.experienceList}/>
                    {/*<ProjectListComponent projectList={this.props.profile.projectList}/>*/}
                </div>
            </Paper>
        );
    }
}
