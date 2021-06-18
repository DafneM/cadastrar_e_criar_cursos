import styled from 'styled-components';

export const TitleCreate= styled.p`
  padding: 0;
  width: max-content;
  margin: 0 auto;
  font-size: 40px;
  margin-top: 10%;
  font-weight: 500;
  color: rgba(0,0,0,0.6);
  align-items:center;
  justify-content:center;
  text-align: center;

  @media(max-width: 425px){
    width: 50%;
    font-size: 20px;
    align-items:center;
    justify-content:center;
    margin: 0 auto;
    }

    @media(max-width: 295px){
    width: 40%;
    font-size: 20px;
    align-items:center;
    justify-content:center;
    margin: 0 auto;
    }
`;