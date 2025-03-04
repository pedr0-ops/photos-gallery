import React from 'react';
import { IPhotosCardProps } from './PhotosCard.types';
import { CardButtonArea, CardContainer } from './PhotosCard.styles';
import { ImageUrlType } from '../../services/imagesService/imagesService.types';

const PhotosCard = ({ image, openGallery }: IPhotosCardProps) => {
  return (
    <CardContainer>
      <CardButtonArea onClick={() => openGallery()} />
      <img src={image.urls[ImageUrlType.REGULAR]} alt={image.alt_description} />
    </CardContainer>
  );
};

export default PhotosCard;
