export interface DeliveryStatusType {
  id: number;
  title: string;
  count: number;
  link: string;
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
