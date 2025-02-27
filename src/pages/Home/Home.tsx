import React, { useCallback, useEffect } from 'react';
import { Container, PhotosContainer } from './Home.styles';
import ImagesService from '../../services/imagesService/imagesService';
import PhotosCard from '../PhotosCard/PhotosCard';
import { IImage, ImageUrlType } from '../../services/imagesService/imagesService.types';
import { toast, ToastContainer } from 'react-toastify';
import Filters from '../Filters/Filters';
import { FilterOption } from '../Filters/Filters.types';

const Home = () => {
  const [images, setImages] = React.useState<IImage[]>();
  const [filter, setFilter] = React.useState<string>('Animais');

  const getImages = useCallback(async () => {
    try {
      const response = await ImagesService.getImages({ limit: 9, searchQuery: filter });
      setImages(response.results);
    } catch {
      toast.error('Erro ao buscar imagens, tente novamente mais tarde.');
    }
  }, [filter]);

  const handleFilterChange = (filter: FilterOption) => {
    setFilter(filter.label);
  };

  useEffect(() => {
    getImages();
  }, [getImages]);

  if (!images) {
    return <div>Carregando...</div>;
  }

  return (
    <Container imageUrl={images?.[0].urls[ImageUrlType.FULL] ?? ''}>
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
      <Filters onFilterChange={handleFilterChange} />
    </Container>
  );
};

export default Home;
