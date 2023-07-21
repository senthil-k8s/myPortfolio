import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container >
    <Div1>
      <Link href="/" legacyBehavior>
          <a style={{ display: 'flex', alignItems: 'center', color:"white", marginBottom:"20px" }}>
            <DiCssdeck size="4rem" /> <span>Senthil Athiban</span>
          </a>
        </Link>  
    </Div1>
    <Div2>
      <li>
        <Link href="#projects" legacyBehavior>
          <div>Projects</div>
        </Link>
      </li>
      <li>
        <Link href="#tech" legacyBehavior>
          <div>Technologies</div>
        </Link>
      </li>
      <li>
        <Link href="#about" legacyBehavior>
          <div>About</div>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href="https://github.com/senthil-k8s">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/senthil-athiban-m/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="">
        <AiFillTwitterSquare size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
