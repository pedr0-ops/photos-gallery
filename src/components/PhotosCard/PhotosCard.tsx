import React from 'react';
import { IPhotosCardProps } from './PhotosCard.types';
import { CardContainer } from './PhotosCard.styles';
import { ImageUrlType } from '../../services/imagesService/imagesService.types';

const PhotosCard = ({ image, openGallery }: IPhotosCardProps) => {
  return (
    <CardContainer onClick={() => openGallery()}>
      <img src={image.urls[ImageUrlType.REGULAR]} alt={image.alt_description} />
    </CardContainer>
  );
};

export default PhotosCard;
