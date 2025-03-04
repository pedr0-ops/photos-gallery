import React, { use, useEffect, useState } from 'react';
import { Container, PhotosContainer } from './Home.styles';
import ImagesService from '../../services/imagesService/imagesService';
import PhotosCard from '../PhotosCard/PhotosCard';
import { IImage, ImageUrlType } from '../../services/imagesService/imagesService.types';
import { toast, ToastContainer } from 'react-toastify';
import Filters from '../Filters/Filters';
import { FilterOption } from '../Filters/Filters.types';
import { useQuery } from 'react-query';
import { QUERY_PATHS } from '../../common/queryPaths';
import FsLightbox from 'fslightbox-react';

const Home = () => {
  const [images, setImages] = React.useState<IImage[]>();
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });
  const [filter, setFilter] = React.useState<string>('Animais');

  const { isLoading, data } = useQuery(
    [QUERY_PATHS.GET_ALL_IMAGES, filter],
    () =>
      ImagesService.getImages({
        limit: 12,
        searchQuery: filter,
      }),
    {
      onSuccess: (data) => setImages(data.results),
      onError: () => toast.error('Erro ao carregar as imagens, tente novamente mais tarde.'),
    }
  );

  const handleFilterChange = (filter: FilterOption) => {
    setFilter(filter.label);
  };

  const handleOpenGallery = (slide: number) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: slide + 1,
    });
  };

  const getImagesUrl = () => {
    return images?.map((image: IImage) => image.urls[ImageUrlType.REGULAR]);
  };

  if (!images) {
    return <div>Carregando...</div>;
  }

  return (
    <Container>
      <PhotosContainer>
        {images?.map((image, index) => (
          <PhotosCard key={image.id} image={image} openGallery={() => handleOpenGallery(index)} />
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

      <FsLightbox toggler={lightboxController.toggler} sources={getImagesUrl()} slide={lightboxController.slide} />
    </Container>
  );
};

export default Home;
