import { ProfileData as resumeData } from '@kamthamc/resume-data';
import { lazy, Suspense } from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const ProfileContainer = lazy(() =>
  import('./Containers/Profile/ProfileContainer').then(imp => ({
    default: imp.ProfileContainer,
  })),
);

const mountNode = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<ProfileContainer resume={resumeData} />} />
      </Routes>
    </Suspense>
  </BrowserRouter>,
  mountNode,
);
