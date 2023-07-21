import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 50%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const Span = styled.span`
color:"red"
`
export const RightSection = styled.div`
  width: 120%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 120%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 120%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const Img = styled.img`
  width:130%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`;
