import { CategoryDataType } from './ProductDataTypes';

export interface CategoryType {
  keyname: string;
  data: CategoryDataType[];
}

export interface MenuBarType {
  data: CategoryType;
  isDefault: boolean;
  isMultiple: boolean;
}
