import styled from 'styled-components';

export const CardContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;

  border: none;
  background-color: transparent;
  transition: background-color 0.3s;
  cursor: pointer;
 
  img {
   width: 100%;
   height: 100%;
   object-fit: cover;
   border-radius: 30px;

   z-index: -20;
  }

  &:hover {
    background-color: rgba(69, 68, 68, 0.5);
  }
`;
