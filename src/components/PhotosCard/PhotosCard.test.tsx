import { render, screen, fireEvent } from '@testing-library/react';
import PhotosCard from './PhotosCard';
import { ImageUrlType, IImage } from '../../services/imagesService/ImagesService.types';

const mockImage: IImage = {
  urls: {
    [ImageUrlType.FULL]: 'https://example.com/full.jpg',
    [ImageUrlType.REGULAR]: 'https://example.com/image.jpg',
    [ImageUrlType.SMALL]: 'https://example.com/small.jpg',
    [ImageUrlType.THUMB]: 'https://example.com/thumb.jpg',
  },
  alt_description: 'Example image',
  id: '123',
};

describe('PhotosCard', () => {
  it('should render the image correctly', () => {
    render(<PhotosCard image={mockImage} openGallery={jest.fn()} />);

    const imageElement = screen.getByRole('img');
    expect(imageElement).toHaveAttribute('src', mockImage.urls[ImageUrlType.REGULAR]);
    expect(imageElement).toHaveAttribute('alt', mockImage.alt_description);
  });

  it('should call openGallery when clicking on the card', () => {
    const mockOpenGallery = jest.fn();
    render(<PhotosCard image={mockImage} openGallery={mockOpenGallery} />);

    const cardContainer = screen.getByRole('img', { name: mockImage.alt_description });
    fireEvent.click(cardContainer);

    expect(mockOpenGallery).toHaveBeenCalledTimes(1);
  });
});
