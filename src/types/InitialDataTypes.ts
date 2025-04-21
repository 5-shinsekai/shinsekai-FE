export interface GnbMenuType {
  id: number;
  title: string;
  icon: React.FC<{ className?: string; onClick?: () => void }>;
}

export interface MainTabMenuType {
  id: number;
  title: string;
  link: string;
}

export interface PolicyDataType {
  id: number;
  title: string;
  required: boolean;
  sub?: {
    title: string;
    policy: PolicyDataType[];
  };
}
