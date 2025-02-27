import React, { useCallback, useEffect } from 'react';
import { Container, PhotosContainer } from './Home.styles';
import ImagesService from '../../services/imagesService/imagesService';
import PhotosCard from '../PhotosCard/PhotosCard';
import { IImage } from '../../services/imagesService/imagesService.types';
import { toast, ToastContainer } from 'react-toastify';

const Home = () => {
  const [images, setImages] = React.useState<IImage[]>();

  const getImages = useCallback(async () => {
    try {
      const response = await ImagesService.getImages({ limit: 9, searchQuery: 'homes' });
      setImages(response.results);
    } catch {
      toast.error('Erro ao buscar imagens, tente novamente mais tarde.');
    }
  }, []);

  useEffect(() => {
    getImages();
  }, [getImages]);

  if (!images) {
    return <div>Carregando...</div>;
  }

  return (
    <Container image={images?.[0] ?? ''}>
      <PhotosContainer>
        {images?.map((image) => (
          <PhotosCard key={image.id} image={image} />
        ))}

        <ToastContainer
          position="top-right"
          newestOnTop
          closeOnClick
          pauseOnHover
          pauseOnFocusLoss
          autoClose={5000}
          rtl={false}
          draggable={false}
          hideProgressBar={false}
        />
      </PhotosContainer>
    </Container>
  );
};

export default Home;
