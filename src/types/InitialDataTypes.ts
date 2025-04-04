export interface gnbMenuType {
  id: number;
  title: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface mainTabMenuType {
  id: number;
  title: string;
  link: string;
}

export interface policyDataType {
  id: number;
  title: string;
  sub?: {
    title: string;
    policy: policyDataType[];
  };
}
