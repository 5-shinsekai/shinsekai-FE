import React from "react";
import { cn } from "@/lib/utils";
export default function DownArrowIcon({
  className,
}: Readonly<{ className?: string }>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="#9E9E9E"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
