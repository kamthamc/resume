/**
 * @author chaitanyaK
 * @date 4/27/17
 * @description
 *
 * */

import React, { PureComponent } from 'react';
import Paper from 'material-ui/Paper';

import { EducationListComponent } from './Education/EducationListComponent';
// import { ProjectListComponent } from './Project/ProjectListComponent';
import { ExperienceListComponent } from './Experience/ExperienceListComponent';
import {LanguageListComponent} from './Language/LanguageListComponent';

import {FrameworkListComponent} from './Framework/FrameworkListComponent';
import './ProfileComponent.css';


export class ProfileComponent extends PureComponent {

    render() {
        const { title, subtitle, email, phone, social, profilePic } = this.props.profile;
        return (
            <Paper className="profile-container">
                <div className="profile">
                    <div className="info">
                        <div className="details">
                            <h4>{title}</h4>
                            <h6>{subtitle}</h6>
                            <div>
                                <i className="material-icons">mail</i> {email}
                            </div>
                            <div>
                                <i className="material-icons">phone</i> {phone}
                            </div>
                            <div>
                                <h5>Social Profiles</h5>
                                {
                                    social.map(({ name, url, icon }) => (
                                        <a
                                            key={name}
                                            href={url}
                                            className={name}
                                            target="blank"
                                            title={name}
                                            aria-label={name}
                                        >
                                            <i className={`fa fa-2x ${icon}`} aria-hidden="true" />
                                        </a>
                                    ))
                                }
                            </div>
                            <div className="summary">
                                <ul>{this.props.profile.summary.map((summary, index) => <li key={index}>{summary}</li>)}</ul>
                            </div>
                        </div>
                        {/*<img className="profile-pic" src={profilePic} alt="profile" />*/}
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
