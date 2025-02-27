import { GetImagesRequest, GetImagesResponse } from "./imagesService.types";
import axios from "axios";

const ImagesService = {
  async getImages({limit= 10, searchQuery}: GetImagesRequest): Promise<GetImagesResponse> {
    const accesKey = '8x-WCYpHUVmQbmQbSdcTixg6LeTXYcPjBiXuCy_IGZo';

   // `https://api.unsplash.com/search/photos?client_id=${accesKey}&per_page=${limit}&query=${searchQuery}`
   const response = await axios.get<GetImagesResponse>(`https://api.unsplash.com/search/photos?client_id=${accesKey}&per_page=${limit}&query=${searchQuery}`);
  
    return response.data;
  }
}


export default ImagesService;