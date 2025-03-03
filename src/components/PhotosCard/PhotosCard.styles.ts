import styled from 'styled-components';

export const CardContainer = styled.button`
  display: flex;
  border-radius: 30px;
  height: 13.125em;
  width: 21.25em;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    border-radius: 30px;
  }

  @media (max-width: 1024px) {
    width: 18em;
    height: 11em;
  }

  @media (max-width: 768px) {
    width: 16em;
    height: 10em;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;