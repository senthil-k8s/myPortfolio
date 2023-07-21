import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Img, RightSection, Span } from './HeroStyles';

const Hero = () => (
  <Section style={{ marginTop: "100px", display: "flex", flexFlow : "row" }}>
    <LeftSection >
      <SectionTitle row nopadding style={{ lineHeight: "1.2" }}>
        <div>
          <span style={{color:"red"}}>Hi</span> <span style={{color:"red"}}>There!</span> <br/>  
        </div>
        Welcome to My Full Stack <br/>
        Playground
      </SectionTitle>
      <SectionText>
        Forging the Future of Web Applications: Accomplished Full Stack Developer Proficient in MERN Stack, Docker, Kubernetes, and Cloud Technologies
      </SectionText>
      <Button> <a href='mailto:senthilathiban0@gmail.com' style={{ color: "#fff" }}>Hire me</a> </Button>
    </LeftSection>
    <RightSection style={{height:"100%", marginLeft:"40px"}}>
      <Img src="/images/MyGif.gif" alt="Image" />
    </RightSection>
  </Section>
);

export default Hero;
