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

export const CreateContainer = styled.aside`
  animation-name: ${fade};
  animation-duration: 1s;
`;
