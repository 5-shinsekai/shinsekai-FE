import {
  CategoryDataType,
  MainCategoryType,
  EventType,
} from './ProductDataTypes';

export interface MenuBarType {
  keyname: string;
  category: CategoryDataType[] | EventType[] | MainCategoryType[];
  isDefault: boolean;
  isMultiple: boolean;
}
