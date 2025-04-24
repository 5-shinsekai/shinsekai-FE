'use server';

import { CommonResponseType } from '@/types/Common';
import { EventThumbnailType } from '@/types/ProductDataTypes';

export const getEventThumbnail = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/event/thumbnail`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 3600,
      },
    }
  );
  const data = (await response.json()) as CommonResponseType<
    EventThumbnailType[]
  >;
  return data.result;
};
