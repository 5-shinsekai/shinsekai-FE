'use server';

import { addressApiType } from '@/types/addressApiType';

export const getAddressList = async (
  keyword: string,
  currentPage: string,
  countPerPage: string
): Promise<addressApiType> => {
  const baseUrl = process.env.NEXT_PUBLIC_SEARCH_ADRESS_BASE_URL;
  const serviceKey = process.env.NEXT_PUBLIC_SEARCH_ADRESS_SECRET_KEY;
  const params = {
    keyword: keyword.trim(), // 공백 제거 후 넘겨주기 (띄어쓰기 여러 번 했을 때 검색 안되는 것 방지)
    currentPage: currentPage,
    countPerPage: countPerPage,
    resultType: 'json',
  };

  const queryString = new URLSearchParams(params).toString();
  const fullUrl = `${baseUrl}?${queryString}&confmKey=${serviceKey}`;

  const res = await fetch(fullUrl);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  const data = (await res.json()) as addressApiType;
  console.log('주소 검색 API 응답:', data);
  return data;
};
