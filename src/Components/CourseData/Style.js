import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  width: 80vw;
  height: 100%;
  background-color: white;
  border-width: 0.1px;
  border-style: solid;
  border-color: rgba(0,0,0, 0.2);
  border-radius: 8px;
  flex-direction: row;
  margin: 4px;

  @media(max-width: 425px){
    height: 15vh;
  }
`;

export const NameDiv = styled.p`
  width: 25%;
  padding: 2% 0 2% 4%;
  margin: 0;

  @media(max-width: 425px){
    padding: 2% 0 2% 2%;
    font-size: 10px;
  }
`;

export const InitDateDiv = styled.p`
  width: 25%;
  padding: 4%;
  margin: 0;

  @media(max-width: 425px){
    width: 30%;
    padding: 2%;
    font-size: 10px;
  }
`;

export const EndDateDiv = styled.p`
  width: 25%;
  padding: 2%;
  margin: 0;

  @media(max-width: 425px){
    width: 30%;
    padding: 2%;
    font-size: 10px;
  }
`;

export const DurationDiv = styled.p`
  width: 15%;
  padding: 2% 0 2% 0;
  margin: 0;

  @media(max-width: 425px){
    width: 30%;
    padding: 2%;
    font-size: 10px;
  }
`;

export const DescriptionDiv = styled.p`
  width: 25%;
`;