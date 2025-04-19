import { StaticImageData } from 'next/image';

export interface CategoryDataType {
  code: number;
  name: string;
}

export interface EventType {
  code: number;
  name: string;
}

export interface EventDetailType {
  eventId: number;
  eventName: string;
  eventImage: string;
  eventImageAltText: string;
  startDate: string;
  endDate: string;
}

export interface ProductListResponseType {
  content: ProductListType;
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
  };
  size: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  totalElements: number;
  totalPages: number;
}

export type ProductListType = string[];

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

export interface EventThumbnailType {
  id: number;
  eventThumbnailImage: string;
  eventThumbnailImageAltText: string;
}

export interface ProductThumbnailType {
  productCode: string;
  productName: string;
  productPrice: number;
  thumbnailUrl: string;
  discountRate: number;
  new: boolean;
  best: boolean;
}
