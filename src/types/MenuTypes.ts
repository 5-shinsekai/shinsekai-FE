import { CategoryDataType } from './ProductDataTypes';
import { EventType } from './ProductDataTypes';

export interface MenuBarType {
  keyname: string;
  category: CategoryDataType[] | EventType[];
  isDefault: boolean;
  isMultiple: boolean;
}
