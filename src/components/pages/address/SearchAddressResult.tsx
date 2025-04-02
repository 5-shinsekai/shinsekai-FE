import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

type CommonResult = {
  totalCount: string;
  errorCode: string;
};

type AddressResult = {
  roadAddr: string;
  zipNo: string;
};

type Props = {
  search: string;
};

export default function SearchAdressResult({ search }: Props) {
  const baseUrl = process.env.NEXT_PUBLIC_SEARCH_ADRESS_BASE_URL;
  const serviceKey = process.env.NEXT_PUBLIC_SEARCH_ADRESS_SECRET_KEY;
  console.log(serviceKey);

  //AdressResult라는 타입을 지정해줌. 제네릭
  const [addressResult, setAddressResult] = useState<AddressResult[]>([]);
  const [commonResult, setcommonResult] = useState<CommonResult | null>(null);
  useEffect(() => {
    const fetchAddresses = async () => {
      const params = {
        keyword: search,
        currentPage: '1',
        countPerPage: '10000',
        resultType: 'json',
      };

      const queryString = new URLSearchParams(params).toString();
      const fullUrl = `${baseUrl}?${queryString}&confmKey=${serviceKey}`;

      try {
        const res = await fetch(fullUrl);
        const data = await res.json();
        setcommonResult(data?.results?.common || null);
        setAddressResult(data?.results?.juso || []);
      } catch (err) {
        console.error('주소 검색 실패:', err);
      }
    };

    fetchAddresses();
  }, [search]);

  return (
    <div className="mt-4">
      {commonResult?.errorCode == 'E0005' && (
        <p>검색어가 입력되지 않았습니다.</p>
      )}
      {addressResult.length > 0 && (
        <div>
          <p>총 '{commonResult?.totalCount}'건의 검색결과</p>
          <ul className="border rounded p-4">
            {addressResult.map((item, index) => (
              <li key={index} className="border-1">
                <p>도로명주소: {item.roadAddr}</p>
                <p>우편번호: {item.zipNo}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {addressResult.length == 0 && <p>다시 입력해주세요</p>}
    </div>
  );
}
