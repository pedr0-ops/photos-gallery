import { GetImagesRequest, GetImagesResponse } from './imagesService.types';
import axios from 'axios';

const ImagesService = {
  async getImages({ limit = 10, searchQuery }: GetImagesRequest): Promise<GetImagesResponse> {
    const accessKey = process.env.REACT_APP_API_KEY;
    const response = await axios.get<GetImagesResponse>(
      `https://api.unsplash.com/search/photos?client_id=${accessKey}&per_page=${limit}&query=${searchQuery}`
    );

    return response.data;
  },
};

export default ImagesService;
