import React from 'react';
import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';
const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>
      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Lucas Zanisk</strong>
            <span>@lucaszanisk</span>
            <Dot />
            <time>11 de ago</time>
          </Header>
          <Description>O que você está pensando?</Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              130
            </Status>
            <Status>
              <RetweetIcon />
              490
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};
export default Tweet;
