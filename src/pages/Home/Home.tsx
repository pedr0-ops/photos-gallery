import React, { useState } from 'react';
import { Container, PhotosContainer } from './Home.styles';
import ImagesService from '../../services/imagesService/ImagesService';
import PhotosCard from '../../components/PhotosCard/PhotosCard';
import { IImage, ImageUrlType } from '../../services/imagesService/ImagesService.types';
import { toast, ToastContainer } from 'react-toastify';
import Filters from '../../components/Filters/Filters';
import { FilterOption, FilterType } from '../../components/Filters/Filters.types';
import { useQuery } from 'react-query';
import { QUERY_PATHS } from '../../common/queryPaths';
import FsLightbox from 'fslightbox-react';
import SkeletonCard from '../../components/SkeletonCard/SkeletonCard';

const IMAGE_LIMIT = 12;

const Home = () => {
  const [images, setImages] = React.useState<IImage[]>();
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });
  const [filter, setFilter] = React.useState<string>(FilterType.MOVIES);

  const { isLoading } = useQuery(
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

  return (
    <Container>
      <PhotosContainer key={filter}>
        {isLoading
          ? Array.from({ length: IMAGE_LIMIT }).map((_, index) => <SkeletonCard key={index} />)
          : images?.map((image, index) => (
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
