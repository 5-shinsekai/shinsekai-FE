import React from 'react';

export default function GiftIcon({
  className,
}: Readonly<{ className?: string }>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="3 3 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M24 12H8C7.44772 12 7 12.4477 7 13V15C7 15.5523 7.44772 16 8 16H24C24.5523 16 25 15.5523 25 15V13C25 12.4477 24.5523 12 24 12Z"
        stroke="#676767"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 12V25"
        stroke="#676767"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 16V23C23 23.5304 22.7893 24.0391 22.4142 24.4142C22.0391 24.7893 21.5304 25 21 25H11C10.4696 25 9.96086 24.7893 9.58579 24.4142C9.21071 24.0391 9 23.5304 9 23V16"
        stroke="#676767"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 12.0004C10.837 12.0004 10.2011 11.737 9.73223 11.2682C9.26339 10.7994 9 10.1635 9 9.50044C9 8.8374 9.26339 8.20151 9.73223 7.73267C10.2011 7.26383 10.837 7.00044 11.5 7.00044C12.4647 6.98363 13.41 7.4517 14.2127 8.3436C15.0154 9.2355 15.6383 10.5098 16 12.0004C16.3617 10.5098 16.9846 9.2355 17.7873 8.3436C18.59 7.4517 19.5353 6.98363 20.5 7.00044C21.163 7.00044 21.7989 7.26383 22.2678 7.73267C22.7366 8.20151 23 8.8374 23 9.50044C23 10.1635 22.7366 10.7994 22.2678 11.2682C21.7989 11.737 21.163 12.0004 20.5 12.0004"
        stroke="#676767"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
