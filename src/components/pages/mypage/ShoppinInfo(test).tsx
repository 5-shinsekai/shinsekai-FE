import React from "react";
import InfoListSectionLayout from "@/components/layouts/InfoListSection";
import { shoppingInfoData } from '@/data/MypageData';

export default function ShoppingInfotest(){
    return(
        <InfoListSectionLayout 
        title="쇼핑정보" 
        items={shoppingInfoData}
        />
    );
}