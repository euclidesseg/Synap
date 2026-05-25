import { ICONS } from "../../shared/icons/icons";

export interface Category {
  id: number;
  name: string;
  icon:keyof typeof ICONS;
}