import React, { useCallback, useEffect } from 'react';
import { Container, PhotosContainer } from './Home.styles';
import ImagesService from '../../services/imagesService/imagesService';
import PhotosCard from '../PhotosCard/PhotosCard';
import { IImage, ImageUrlType } from '../../services/imagesService/imagesService.types';
import { toast, ToastContainer } from 'react-toastify';
import Filters from '../Filters/Filters';
import { FilterOption } from '../Filters/Filters.types';
import { useQuery } from 'react-query';
import { QUERY_PATHS } from '../../common/queryPaths';

const Home = () => {
  const [images, setImages] = React.useState<IImage[]>();
  const [filter, setFilter] = React.useState<string>('Animais');

  const { isLoading } = useQuery(
    [QUERY_PATHS.GET_ALL_IMAGES, filter],
    () =>
      ImagesService.getImages({
        limit: 12,
        searchQuery: filter,
      }),
    {
      onSuccess: (data) => setImages(data.results),
      onError: () => toast.error('Erro ao carregar as empresas, tente novamente.'),
    }
  );

  const handleFilterChange = (filter: FilterOption) => {
    setFilter(filter.label);
  };

  if (!images) {
    return <div>Carregando...</div>;
  }

  return (
    <Container>
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
