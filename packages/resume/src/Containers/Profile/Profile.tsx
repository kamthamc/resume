import * as React from 'react';
import styled from 'styled-components';
import Resume from '../../Contexts/Resume';
import hi from './hi.png';

interface ProfileProps {}

const Header = styled('div')`
  font-size: xx-large;
  padding: 5px;
`;

const SubHeader = styled('div')`
  font-size: x-large;
  padding: 5px;
`;

const SocialSitesWrapper = styled('div')`
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const SocialSite = styled('a')`
  font-size: x-large;
  color: #419eda;
  text-transform: capitalize;
  text-decoration: none;
  transition: all 2s;

  &:visited,
  &:active {
    color: #419eda;
  }
  &:hover {
    color: #41ffff;
  }

  &:after {
    display: inline-block;
    content: '/';
    color: #000;
    font-size: 24px;
    margin-right: 5px;
    margin-left: 5px;
  }
  &:last-child:after {
    display: none;
  }
`;

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  min-height: 400px;
  min-width: 400px;
`;

const ImgWrapper = styled('img')``;

const Profile = (props: ProfileProps) => {
  return (
    <Resume.Consumer>
      {resume => (
        <Container>
          <ImgWrapper src={hi} />
          <Header>This is {resume.title}.</Header>
          <SubHeader>{resume.subtitle}</SubHeader>
          <SocialSitesWrapper>
            {resume.social.map(social => (
              <SocialSite key={social.name} href={social.url} target="_blank">
                {social.name}
              </SocialSite>
            ))}
          </SocialSitesWrapper>
        </Container>
      )}
    </Resume.Consumer>
  );
};

export default Profile;
