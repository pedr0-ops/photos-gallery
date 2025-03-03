import React, { useEffect, useState } from 'react';
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
  const [openGallery, setOpenGallery] = React.useState<boolean>(false);
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

  const handleOpenGallery = () => {
    console.log('open gallery');
    setOpenGallery(true);
  };

  const getImagesUrl = () => {
    return data?.results.map((image: IImage) => image.urls[ImageUrlType.REGULAR]);
  };

  if (!images) {
    return <div>Carregando...</div>;
  }

  return (
    <Container>
      <PhotosContainer>
        {images?.map((image) => (
          <PhotosCard key={image.id} image={image} openGallery={handleOpenGallery} />
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

      <FsLightbox toggler={openGallery} sources={getImagesUrl()} />
    </Container>
  );
};

export default Home;
