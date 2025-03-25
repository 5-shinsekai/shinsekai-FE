import React from "react";
import { cn } from "@/lib/utils";
export default function MinusIcon({
  className,
}: Readonly<{ className?: string }>) {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <circle cx="9.5" cy="9.5" r="9" fill="white" stroke="#EDEDED" />
      <path d="M14.5 9.5L4.5 9.5" stroke="#EDEDED" />
    </svg>
  );
}
