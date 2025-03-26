import MainHeader from "@/components/layouts/MainHeader";
import MainFooter from "@/components/layouts/MainFooter";
import React from "react";
import MainTabMenu from "@/components/layouts/MainTabMenu";

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <MainHeader />
      <MainTabMenu />
      {children}
      <MainFooter />
    </>
  );
}
