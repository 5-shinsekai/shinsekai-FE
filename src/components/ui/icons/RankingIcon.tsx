import React from 'react';

export default function RankingIcon({ rank }: { rank: number | undefined }) {
  return (
    <>
      {rank && (
        <svg
          className=" absolute top-0 right-1/12 text-xs fill-custom-green-200"
          viewBox="0 0 24 30"
          width="24"
          height="30"
        >
          <path d="M0 0 H24 V24 L12 30 L0 24 Z" />
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="fill-white font-semibold"
          >
            {rank}
          </text>
        </svg>
      )}
    </>
  );
}
