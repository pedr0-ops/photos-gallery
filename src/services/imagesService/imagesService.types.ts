export interface GetImagesRequest {
  limit?: number;
  searchQuery: string;
}

export enum ImageUrlType {
  FULL = 'full',
  REGULAR = 'regular',
  SMALL = 'small',
  THUMB = 'thumb'
}

export interface IImage {
 urls : {
  [ImageUrlType.FULL]: string;
  [ ImageUrlType.REGULAR]: string;
  [ImageUrlType.SMALL]: string;
  [ ImageUrlType.THUMB]: string;
 };

 alt_description: string;
 id: string;
}

export interface GetImagesResponse {
  results: IImage[];
  total: number;
  total_pages: number;
}