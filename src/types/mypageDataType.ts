export interface deliveryStatusType {
  id: number;
  title: string;
  count: number;
  link: string;
}

export interface myPageInfoType {
  id: number;
  title: string;
  link: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface infoSectionLayoutType {
  title: string;
  items: myPageInfoType[];
  className?: string;
}