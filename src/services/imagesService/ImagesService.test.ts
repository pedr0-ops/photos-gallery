import ImagesService from './ImagesService';
import { GetImagesResponse, ImageUrlType } from './ImagesService.types';
import axios from 'axios';

jest.mock('axios');
const apiMock = axios as jest.Mocked<typeof axios>;

describe('ImagesService', () => {
  const mockResponse: GetImagesResponse = {
    total: 1,
    total_pages: 1,
    results: [
      {
        id: 'image-id-123',
        alt_description: 'A beautiful cat',
        urls: {
          [ImageUrlType.FULL]: 'https://example.com/full.jpg',
          [ImageUrlType.REGULAR]: 'https://example.com/regular.jpg',
          [ImageUrlType.SMALL]: 'https://example.com/small.jpg',
          [ImageUrlType.THUMB]: 'https://example.com/thumb.jpg',
        },
      },
    ],
  };

  beforeAll(() => {
    process.env.REACT_APP_API_KEY = 'fake-api-key';
  });

  it('deve buscar imagens com o query e limit padrão', async () => {
    apiMock.get.mockResolvedValueOnce({ data: mockResponse });

    const data = await ImagesService.getImages({ searchQuery: 'gatos' });

    expect(apiMock.get).toHaveBeenCalledWith(expect.stringContaining('client_id=fake-api-key'));

    expect(apiMock.get).toHaveBeenCalledWith(expect.stringContaining('per_page=10'));

    expect(apiMock.get).toHaveBeenCalledWith(expect.stringContaining('query=gatos'));

    expect(data).toEqual(mockResponse);
  });

  it('deve utilizar o limit informado na URL', async () => {
    apiMock.get.mockResolvedValueOnce({ data: mockResponse });

    await ImagesService.getImages({ limit: 5, searchQuery: 'cachorros' });

    expect(apiMock.get).toHaveBeenCalledWith(expect.stringContaining('per_page=5'));
  });
});
