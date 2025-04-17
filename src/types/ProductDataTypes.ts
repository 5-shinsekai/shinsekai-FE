import { StaticImageData } from 'next/image';

export interface CategoryDataType {
  code: number;
  name: string;
}

export interface SeasonType {
  id: number;
  seasonName: string;
}

export interface ProductType {
  id: number;
  title: string;
  price: number;
  discountRate: number;
  productImage: StaticImageData;
  isNew: boolean;
  isBest: boolean;
}

export interface ProductDetailType {
  id: number;
  productCode: string;
  productImagePath: string;
  productDescriptionPath: string[];
  productPrice: number;
  title: string;
  productSummary: string;
  limitCount: number;
  discountRate: number;
  isNew: boolean;
  isBest: boolean;
}

export interface ProductThumbnailType {
  productCode: string;
  productName: string;
  productPrice: number;
  thumbnailUrl: string;
  discountRate: number;
  new: boolean;
}
