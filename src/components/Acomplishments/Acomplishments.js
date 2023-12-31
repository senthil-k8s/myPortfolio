import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 10, text: 'Open Source Projects'},
  { number: 100, text: '#DaysOfCode Challenge', },
  { number: 1856, text: 'Rank in PrepSAT Jobathon', },
  { number: 300, text: 'LeetCode problems', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      My Accomplishment
    </SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>
            {card.number === 1856 ? card.number : `${card.number}+`}
          </BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
