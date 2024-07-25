export interface IDropdownOption {
  name?: string;
  isActive?: boolean;
}

export interface IResourceCard {
  id?: string | number;
  img?: string;
  title?: string;
  tags?: { name?: string; icon?: React.ReactNode }[];
}
