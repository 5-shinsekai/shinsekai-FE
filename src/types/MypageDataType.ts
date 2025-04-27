export interface DeliveryStatusType {
  title: string;
  count: number;
}

export interface MyPageInfoType {
  id: number;
  title: string;
  link: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface InfoSectionLayoutType {
  title: string;
  items: MyPageInfoType[];
  className?: string;
}
