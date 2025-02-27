import React, { useEffect } from 'react';
import { Container, PhotosContainer } from './Home.styles';
import ImagesService from '../../services/imagesService/imagesService';

const Home = () => {
  const getImages = async () => {
    try {
      const response = await ImagesService.getImages({ limit: 10, searchQuery: 'cats' });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <Container>
      <PhotosContainer>
        <h1>Photos</h1>
      </PhotosContainer>
    </Container>
  );
};

export default Home;
