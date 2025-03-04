import styled from 'styled-components';


export const Container = styled.div`
height: 100vh;
display: flex;
overflow: hidden;
padding-top: 60px;

flex-direction: column;
align-items: center;
justify-content: center;

background-image:  url('https://www.supercamera.com.br/y/1296/fotos-rua-e1603992704490-600.webp');
background-size: cover;

`;

export const PhotosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  overflow-y: auto;
  gap: 1.25rem;

  align-items: center;
  justify-content: center;

  width: 80%;
  height: 80%;
  padding: 2.5rem;

  background: rgba(0, 0, 0, 0.3); 
  backdrop-filter: blur(10px); 

  border-radius: 40px;
  border: 1px inset white;

  
  animation: fadeIn 0.5s ease-in-out forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 1600px) {
    width: 100%;
    grid-template-columns: repeat(4 , 1fr);
    padding: 2.5rem;  
  }

  @media (max-width: 1300px) {
    width: 90%;
    grid-template-columns: repeat(4 , 1fr);
    padding: 2.5rem;  
  }

  @media (max-width: 1024px) {
    width: 95%;
    grid-template-columns: repeat(3, 1fr);
    padding: 2.5rem;  
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 1.5rem;
  }
  
`;