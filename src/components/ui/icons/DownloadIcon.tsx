import React from "react";
import { cn } from "@/lib/utils";
export default function DownloadIcon({
  className,
}: Readonly<{ className?: string }>) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M7.5 10.625V1.875"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.75 6.875L7.5 10.625L11.25 6.875"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.875 13.125H3.125"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
