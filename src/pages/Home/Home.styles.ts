import styled from 'styled-components';
import { IPhotoContainerProps } from './Home.types';
import { ImageUrlType } from '../../services/imagesService/imagesService.types';

export const Container = styled.div<IPhotoContainerProps>`
height: 100vh;
display: flex;
overflow: hidden;
padding-top: 60px;

align-items: start;
justify-content: center;

background-image:  url(${(props) => props.image.urls[ImageUrlType.FULL]});
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