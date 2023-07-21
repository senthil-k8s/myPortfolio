import React from 'react';
import { AiFillGithub, AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper >
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem>+91 95857 66102</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem>senthilathiban0@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>© 2023 Senthil Athiban</Slogan>    
          </CompanyContainer>
          <SocialContainer>
            <SocialIcons href="https://github.com/senthil-k8s">
              <AiFillGithub size="3rem"/>
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/senthil-athiban-m/">
              <AiFillLinkedin size="3rem"/>
            </SocialIcons>
            <SocialIcons href="https://twitter.com/senthil_k8s">
              <AiFillTwitterSquare size="3rem"/>
            </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
