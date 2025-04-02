'use client';

import { Button } from '@/components/ui/button';
import React from 'react';
import DaumPostCode from 'react-daum-postcode';
import { useState } from 'react';

const serviceKey = 'devU01TX0FVVEgyMDI1MDQwMjExMDkxODExNTYwMjk=';
export default function SearchAdressForm() {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const countPerPage = 10;

  const fetchResults = async (page: number = 1) => {
    if (!keyword.trim()) return;

    const apiUrl = `https://business.juso.go.kr/addrlink/addrLinkApi.do?currentPage=${page}&countPerPage=${countPerPage}&keyword=${encodeURIComponent(
      keyword
    )}&confmKey=${serviceKey}&resultType=json`;

    try {
      const res = await fetch(apiUrl);
      const data = await res.json();

      const jusoList = data?.results?.juso || [];
      setResults(jusoList);
      setTotalCount(parseInt(data.results.common.totalCount));
      setCurrentPage(page);
    } catch (error) {
      console.error('주소 검색 오류:', error);
    }
  };

  const handleSearch = () => {
    fetchResults(1);
  };

  const totalPages = Math.ceil(totalCount / countPerPage);
  const pageBlock = 5;
  const firstPage = Math.floor((currentPage - 1) / pageBlock) * pageBlock + 1;
  const lastPage = Math.min(firstPage + pageBlock - 1, totalPages);

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <input
          placeholder="주소를 입력하시오"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
        <Button type="button" onClick={handleSearch}>
          주소검색
        </Button>
      </div>

      <div id="list">
        {results.length > 0 ? (
          <ul>
            {results.map((item, idx) => (
              <li key={idx} className="border-b py-2">
                {item.roadAddr} ({item.zipNo})
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">검색 결과가 없습니다.</p>
        )}
      </div>

      {/* 페이지네이션 */}
      {totalCount > 0 && (
        <div className="paginate mt-4 flex gap-2" id="pageApi">
          {firstPage > pageBlock && (
            <button onClick={() => fetchResults(firstPage - 1)}>◁</button>
          )}
          {Array.from({ length: lastPage - firstPage + 1 }, (_, i) => {
            const page = firstPage + i;
            return (
              <button
                key={page}
                onClick={() => fetchResults(page)}
                className={`px-2 ${
                  page === currentPage ? 'text-blue-500 font-bold' : ''
                }`}
              >
                {page}
              </button>
            );
          })}
          {lastPage < totalPages && (
            <button onClick={() => fetchResults(lastPage + 1)}>▷</button>
          )}
        </div>
      )}
    </div>
  );
}
