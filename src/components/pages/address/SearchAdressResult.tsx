import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

type Juso = {
  roadAddr: string;
  zipNo: string;
};

type Props = {
  search: string;
};

// export const getAddressData = async (search: string) => {
//   const baseUrl = 'https://business.juso.go.kr/addrlink/addrLinkApi.do';
//   const serviceKey = 'devU01TX0FVVEgyMDI1MDQwMjExMDkxODExNTYwMjk=';

//   const params = {
//     keyword: search,
//     currentPage: '1',
//     countPerPage: '10',
//     resultType: 'json',
//     confmKey: serviceKey,
//   };

//   const queryString = new URLSearchParams(params).toString();
//   const fullUrl = `${baseUrl}?${queryString}`;

//   const res = await fetch(fullUrl);
//   return res.json();
// };

export default function SearchAdressResult({ search }: Props) {
  const baseUrl = process.env.NEXT_PUBLIC_SEARCH_ADRESS_BASE_URL;
  const serviceKey = process.env.NEXT_PUBLIC_SEARCH_ADRESS_SECRET_KEY;
  console.log(serviceKey);

  const [results, setResults] = useState<Juso[]>([]); //Juso[]라는 타입을 지정해줌. 제네릭

  useEffect(() => {
    console.log(baseUrl, serviceKey);
  }, []);
  useEffect(() => {
    const fetchAddresses = async () => {
      const params = {
        keyword: search,
        currentPage: '1',
        countPerPage: '10',
        resultType: 'json',
        // confmKey: serviceKey,
      };

      const queryString = new URLSearchParams(params).toString();
      const fullUrl = `${baseUrl}?${queryString}&confmKey=${serviceKey}`;

      try {
        const res = await fetch(fullUrl);
        const data = await res.json();
        setResults(data?.results?.juso || []);
      } catch (err) {
        console.error('주소 검색 실패:', err);
      }
    };

    fetchAddresses();
  }, [search]);

  return (
    <div className="mt-4">
      <ul className="border rounded p-4">
        {results.map((item, idx) => (
          <li key={idx} className="border-1">
            <p>
              <strong>도로명주소:</strong> {item.roadAddr}
            </p>
            <p>
              <strong>우편번호:</strong> {item.zipNo}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
