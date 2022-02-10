export interface NuColumn {
  key: string;
  name: string;
  sortable?: boolean;
  hidden?: () => void;
  width?: string | null;
  style?: { [key: string]: string | number };
}

export interface NuData {
  [key: string]: any;
}
