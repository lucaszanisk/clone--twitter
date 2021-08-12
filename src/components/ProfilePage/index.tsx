import React from 'react';
import Feed from '../Feed';
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Lucas Zanisk</h1>
        <h2>@lucaszanisk</h2>
        <p>
          FrontEnd Developer at <a href='/'>@MyHead</a>
        </p>
        <ul>
          <li>
            <LocationIcon /> São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            24 de Julho de 1996
          </li>
        </ul>
        <Followage>
          <span>
            Seguindo <strong>821</strong>
          </span>
          <span>
            <strong>929 </strong> Seguidores{' '}
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
