import styled from 'styled-components';

export const Container = styled.div`
height: 100vh;
display: flex;
overflow: hidden;
padding-top: 60px;

align-items: start;
justify-content: center;

background-image:  url("https://i0.wp.com/pachecos.com/wp-content/uploads/2024/05/Sala-de-Estar-Pachecos-Mobiliario.jpg?fit=2000%2C1500&ssl=1")  ;
background-size: cover;
`;


export const PhotosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.25rem;
  padding: 3.75rem;

  width: 70%;
  height: 80%;

  background: rgba(0, 0, 0, 0.3); /* Para dar um efeito de vidro */
  backdrop-filter: blur(10px); /* Para o efeito fosco */

  border-radius: 40px;
  border: 1px inset white;
  
`;