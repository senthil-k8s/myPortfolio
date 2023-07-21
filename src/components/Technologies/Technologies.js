import React from 'react';
import { DiFirebase, DiReact, DiNodejs, DiDocker, DiGoogleCloudPlatform, DiGithubBadge } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    With a strong command of React, Node.js, Express, MongoDB, Docker, Kubernetes, and GCP, I create robust and scalable applications. Leveraging React, I craft intuitive and responsive user interfaces, while Node.js and Express power the backend for seamless functionality. MongoDB ensures efficient data management, while Docker and Kubernetes enable easy deployment and orchestration. With proficiency in GCP, I leverage its cloud services to build efficient and scalable solutions. Together, these technologies enable me to transform ideas into innovative digital experiences.
    </SectionText>
    <List>
      <ListTitle style={{backgroundColor:"#212D45", padding:"2rem", borderRadius:"20px"}}>
        <DiReact size="4rem" style={{color:"#00FFFF"}}/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
          Proficient in React, transforming ideas into interactive experiences
          </ListParagraph>
        </ListContainer>
      </ListTitle>
      <ListTitle style={{backgroundColor:"#212D45", padding:"2rem", borderRadius:"20px"}}>
        <DiNodejs size="4rem" style={{color:"#03C03C"}}/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Mastering Node.js, powering scalable and efficient backend solutions
          </ListParagraph>
        </ListContainer>
      </ListTitle>
      <ListTitle style={{backgroundColor:"#212D45", padding:"2rem", borderRadius:"20px"}}>
        <DiFirebase size="4rem" style={{color:"#BA0021"}}/>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Expertise in MongoDB, enabling seamless and efficient data management.
          </ListParagraph>
        </ListContainer>
      </ListTitle>
      <ListTitle style={{backgroundColor:"#212D45", padding:"2rem", borderRadius:"20px"}}>
        <DiDocker size="4rem" style={{color:"#0db7ed"}}/>
        <ListContainer>
          <ListTitle>Docker + Kubernetes</ListTitle>
          <ListParagraph>
            Proficient in Docker and Kubernetes, orchestrating scalable and portable applications.
          </ListParagraph>
        </ListContainer>
      </ListTitle>
      <ListTitle style={{backgroundColor:"#212D45", padding:"2rem", borderRadius:"20px"}}>
        <DiGoogleCloudPlatform size="4rem" style={{color:"#89CFF0"}}/>
        <ListContainer>
          <ListTitle>GCP</ListTitle>
          <ListParagraph>
            Experienced in leveraging Google Cloud Platform (GCP) for scalable and reliable solutions.
          </ListParagraph>
        </ListContainer>
      </ListTitle>
      <ListTitle style={{backgroundColor:"#212D45", padding:"2rem", borderRadius:"20px"}}>
        <DiGithubBadge size="4rem" />
        <ListContainer>
          <ListTitle>Git & GitHub</ListTitle>
          <ListParagraph>
            Proficient in Git and GitHub, facilitating efficient collaboration and version control.
          </ListParagraph>
        </ListContainer>
      </ListTitle>
      
    </List>
  </Section>
);

export default Technologies;
