import React from 'react';

export default function AlarmIcon({
  className,
}: Readonly<{ className?: string }>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="4 4 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.8421 17.4207L12.2709 17.678C12.3175 17.6003 12.3421 17.5114 12.3421 17.4207H11.8421ZM9 22.1576L8.57125 21.9003C8.47857 22.0548 8.47615 22.2472 8.5649 22.4039C8.65365 22.5607 8.81986 22.6576 9 22.6576V22.1576ZM23.2105 22.1576V22.6576C23.3907 22.6576 23.5569 22.5607 23.6456 22.4039C23.7344 22.2472 23.732 22.0548 23.6393 21.9003L23.2105 22.1576ZM20.3684 17.4207H19.8684C19.8684 17.5114 19.893 17.6003 19.9397 17.678L20.3684 17.4207ZM12.3421 14.105C12.3421 12.0266 14.0269 10.3418 16.1053 10.3418V9.3418C13.4746 9.3418 11.3421 11.4743 11.3421 14.105H12.3421ZM12.3421 17.4207V14.105H11.3421V17.4207H12.3421ZM9.42875 22.4148L12.2709 17.678L11.4134 17.1635L8.57125 21.9003L9.42875 22.4148ZM23.2105 21.6576H9V22.6576H23.2105V21.6576ZM19.9397 17.678L22.7818 22.4148L23.6393 21.9003L20.7972 17.1635L19.9397 17.678ZM19.8684 14.105V17.4207H20.8684V14.105H19.8684ZM16.1053 10.3418C18.1836 10.3418 19.8684 12.0266 19.8684 14.105H20.8684C20.8684 11.4743 18.7359 9.3418 16.1053 9.3418V10.3418Z"
        fill="#676767"
      />
      <line
        x1="16.0781"
        y1="9.3418"
        x2="16.0781"
        y2="7.49969"
        stroke="#676767"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.7837 22.1582V21.6582C13.5459 21.6582 13.341 21.8257 13.2937 22.0587L13.7837 22.1582ZM18.4258 22.1582L18.9158 22.0587C18.8685 21.8257 18.6636 21.6582 18.4258 21.6582V22.1582ZM14.2363 22.6319C14.2363 22.5033 14.2493 22.3782 14.2737 22.2577L13.2937 22.0587C13.256 22.2443 13.2363 22.4361 13.2363 22.6319H14.2363ZM16.1047 24.5003C15.0728 24.5003 14.2363 23.6638 14.2363 22.6319H13.2363C13.2363 24.2161 14.5206 25.5003 16.1047 25.5003V24.5003ZM17.9732 22.6319C17.9732 23.6638 17.1366 24.5003 16.1047 24.5003V25.5003C17.6889 25.5003 18.9732 24.2161 18.9732 22.6319H17.9732ZM17.9358 22.2577C17.9602 22.3782 17.9732 22.5033 17.9732 22.6319H18.9732C18.9732 22.4361 18.9535 22.2443 18.9158 22.0587L17.9358 22.2577ZM18.4258 21.6582H13.7837V22.6582H18.4258V21.6582Z"
        fill="#676767"
      />
    </svg>
  );
}
