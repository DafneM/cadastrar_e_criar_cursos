import styled from 'styled-components';
import { keyframes } from 'styled-components'


const fade = keyframes`
  from{
    opacity: 0
  }
  to{
    opacity: 1
  }
`;

export const ListContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation-name: ${fade};
  animation-duration: 1s;
  /* transition: all 0.2s ease 0s;

  &:hover {
    width: 240px;
  } */
`;


const gradient = keyframes`
  from{
    background-position: 0 50%
  }
  to{
    background-position: 100% 50%
  }
`;

export const Header = styled.p`
  animation: ${gradient} 10s ease infinite;
  display: flex;
  flex-direction: row;
  width: 80vw;
  margin-bottom: 0;
  border-radius: 8px;
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
  color: white;
`;


export const NameDiv = styled.p`
  width: 25%;
  padding: 2% 0 2% 4%;
  margin: 0;
  font-weight: 700;
  letter-spacing: 0.8px;

  @media(max-width: 425px){
    font-size: 10px;
    }

`;

export const TitleList = styled.p`
  width: 20%;
  margin: 0 auto;
  font-size: 40px;
  margin-top: 6%;
  font-weight: 500;
  color: rgba(0,0,0,0.6);
  text-align: center;

  @media(max-width: 425px){
    width: 40%;
    font-size: 20px;
    margin: 0 auto;
    }

    @media(max-width: 350px){
    width: 50%;
    font-size: 20px;
    margin: 0 auto;
    }
`;

export const InitDateDiv = styled.p`
  width: 25%;
  padding: 2%;
  margin: 0;
  font-weight: 700;
  letter-spacing: 0.8px;

  @media(max-width: 425px){
    font-size: 10px;
    }
`;

export const EndDateDiv = styled.p`
  width: 25%;
  padding: 2%;
  margin: 0;
  font-weight: 700;
  letter-spacing: 0.8px;

  @media(max-width: 425px){
    font-size: 10px;
    }
`;

export const DurationDiv = styled.p`
  width: 15%;
  padding: 2% 0 2% 0;
  margin: 0;
  font-weight: 700;
  letter-spacing: 0.8px;

  @media(max-width: 425px){
    font-size: 10px;
    }
`;

const grow = keyframes`
  to{
    transform: scaleY(2)
  }
`;


export const FirstSpan = styled.p`
  background-color: #e7008a;
  width: 10px;
  height: 30px;
  display: inline-block;
  margin: 150px 2px;
  animation: ${grow} 0.5s -0.3s ease-in-out alternate infinite;
`;

export const SecondSpan = styled.p`
  background-color: #e7008a;
  width: 10px;
  height: 20px;
  display: inline-block;
  margin: 150px 2px;
  animation: ${grow} 0.5s -0.15s ease-in-out alternate infinite;
`;

export const ThirdSpan = styled.p`
  background-color: #e7008a;
  width: 10px;
  height: 30px;
  display: inline-block;
  margin: 150px 2px;
  animation: ${grow} 0.5s -0.45s ease-in-out alternate infinite;
`;

export const FourthSpan = styled.p`
  background-color: #e7008a;
  width: 10px;
  height: 30px;
  display: inline-block;
  margin: 150px 2px;
  animation: ${grow} 0.5s -0s ease-in-out alternate infinite;
`;
