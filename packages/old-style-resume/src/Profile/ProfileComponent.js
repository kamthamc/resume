/**
 * @author chaitanyaK
 * @date 4/27/17
 * @description
 *
 * */

import React, { PureComponent } from 'react';
import Paper from 'material-ui/Paper';

import EducationListComponent from './Education/EducationListComponent';
// import { ProjectListComponent } from './Project/ProjectListComponent';
import { ExperienceListComponent } from './Experience/ExperienceListComponent';
import { Skills } from './Skills/Skills';
import './ProfileComponent.css';
import PDFResume from '@kamthamc/resume-data/Resume.pdf';


export class ProfileComponent extends PureComponent {

    render() {
        const {
            title,
            subtitle,
            email,
            phone,
            social,
            profilePic,
            description,
            experienceList,
            educationList,
            frameworkList,
            languageList,
        } = this.props.profile;
        return (
            <div className="ProfileContainer">
                <div className="profile">
                    <div className="info">
                        <div className="details">
                            <h4>{title}</h4>
                            <h6>{subtitle}</h6>
                            <p>
                                <i className="material-icons">mail</i> {email}
                            </p>
                            <p>
                                <i className="material-icons">phone</i> {phone}
                            </p>
                            <div className="social">
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
                                            <i className={`fa ${icon}`} aria-hidden="true" />
                                        </a>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="titlePic">
                            <img src={profilePic} alt="profile" />
                            <div className="slant" />
                            <div className="btn-floating btn-large add-btn"><i className="material-icons">add</i></div>
                        </div>

                        {/*<img className="profile-pic" src={profilePic} alt="profile" />*/}
                    </div>
                    <Paper className="description">
                        <p>{description}</p>
                        <div id="about-btn" className="actions">
                            <div className="about-btn">
                                <a href={PDFResume} download='Resume.pdf' className="btn waves-effect">Download CV</a>
                                <a href={`mailto:'chaitanya Kamatham'<${email}>`} className="btn waves-effect">Contact Me</a>
                            </div>
                        </div>
                    </Paper>
                    <Skills languageList={languageList} frameworkList={frameworkList}/>
                    <ExperienceListComponent experienceList={experienceList}/>
                    <EducationListComponent educationList={educationList}/>
                </div>
            </div>
        );
    }
}
