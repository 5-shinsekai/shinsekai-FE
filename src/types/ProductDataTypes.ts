import { StaticImageData } from 'next/image';

export interface eventType {
  eventCode: number;
  eventName: string;
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
