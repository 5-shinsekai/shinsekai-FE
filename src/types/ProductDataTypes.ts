import { StaticImageData } from 'next/image';

export interface CategoryDataType {
  code: number;
  name: string;
}

export interface seasonType {
  id: number;
  seasonName: string;
}

export interface productType {
  id: number;
  title: string;
  price: number;
  discountRate: number;
  productImage: StaticImageData;
  isNew: boolean;
  isBest: boolean;
}

export interface productDetailType {
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
