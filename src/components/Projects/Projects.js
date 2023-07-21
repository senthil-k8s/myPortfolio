import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section id="projects">
    <SectionDivider /><br /><br/>
      <SectionTitle>My Projects</SectionTitle>
      <GridContainer>
        {projects.map(({id, title, description, image, source, visit, tags}) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree>{title}</HeaderThree>
            </TitleContent>
            <Hr />
            <CardInfo>{description}</CardInfo>
            <Hr/>
            <div>
              <TitleContent>Tech Stack</TitleContent>
              <TagList>
                {tags.map((tag, ind) => (
                  <Tag key={ind}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit}>Code</ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
  </Section>
);

export default Projects;