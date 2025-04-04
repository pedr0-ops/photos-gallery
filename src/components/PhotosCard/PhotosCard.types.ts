import { IImage } from '../../services/imagesService/ImagesService.types';

export interface IPhotosCardProps {
  image: IImage;
  openGallery: () => void;
}
