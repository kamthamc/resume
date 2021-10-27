import { NavLink } from 'react-router-dom';

import type { ProfileData } from '@kamthamc/resume-data';
export const TopNavigation = (props: { resume: typeof ProfileData }) => {
  return (
    <nav className="prose-lg shadow-lg">
      <NavLink to="">{props.resume.title}</NavLink>
      {props.resume.languageList.length > 0 && (
        <NavLink to="/languages">Languages</NavLink>
      )}
      {props.resume.frameworkList.length > 0 && (
        <NavLink to="/frameworks">Frameworks</NavLink>
      )}
      {props.resume.experienceList.length > 0 && (
        <NavLink to="/work">Work</NavLink>
      )}
      {props.resume.projectList.length > 0 && (
        <NavLink to="/projects">Projects</NavLink>
      )}
      {props.resume.educationList.length > 0 && (
        <NavLink to="/education">Projects</NavLink>
      )}
    </nav>
  );
};
