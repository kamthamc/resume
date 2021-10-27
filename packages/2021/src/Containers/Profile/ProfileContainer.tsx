import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { TopNavigation } from './TopNavigation';

import type { ProfileData } from '@kamthamc/resume-data';
export const ProfileContainer = (props: { resume: typeof ProfileData }) => {
  useDocumentTitle('Profile');
  return (
    <div className="flex flex-col flex-1">
      <TopNavigation resume={props.resume} />
      <main>
        <h1 className="text-gray-900 dark:text-white">{props.resume.title}</h1>
      </main>
    </div>
  );
};
