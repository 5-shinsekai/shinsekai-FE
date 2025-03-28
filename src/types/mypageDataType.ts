export interface deliveryStatusType {
  id: number;
  title: string;
  count: number;
}

export interface shoppingInfoType {
  id: number;
  title: string;
  link: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
