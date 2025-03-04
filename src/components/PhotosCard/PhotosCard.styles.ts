import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  height: 13.125em;
  width: 21.25em;
 

  img {
   width: 100%;
   height: 100%;
   object-fit: cover;
   border-radius: 30px;
  }

  @media (max-width: 1600px) {
    width: 17em;
    height: 11em;
  }

  @media (max-width: 1200px) {
    width: 17em;
    height: 11em;
  }

  @media (max-width: 1024px) {
    width: 14em;
    height: 8em;
  }

  @media (max-width: 768px) {
    width: 9em;
    height: 6em;
  }

  @media (max-width: 480px) {
    width: 5em;
    height: 3em;
  }
`;

export const CardButtonArea = styled.button`
 z-index: 100;
 position: absolute;

 border-radius: 30px;
 height: 15.80em;
 width: 25.50em;


  border: none;
  background-color: transparent;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: rgba(69, 68, 68, 0.5);
  }


  @media (max-width: 1600px) {
    width: 17em;
    height: 11em;
  }

  @media (max-width: 1200px) {
    width: 17em;
    height: 11em;
  }

  @media (max-width: 1024px) {
    width: 14em;
    height: 8em;
  }

  @media (max-width: 768px) {
    width: 9em;
    height: 6em;
  }

  @media (max-width: 480px) {
    width: 5em;
    height: 3em;
  }
`;