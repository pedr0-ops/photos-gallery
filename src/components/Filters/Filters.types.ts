export interface FilterOption {
  label: string;
  value: string;
}

export enum FilterType {
  ANIMALS = 'Animais',
  MOVIES = 'Filmes',
  STREET_PHOTOGRAPHY = 'Fotografia de Rua',
  TRAVEL = 'Viajar',
}

export interface IFiltersProps {
  onFilterChange?: (filter: FilterOption) => void;
}

export interface RadioCardItemPropsMock {
  children: React.ReactNode;
  value: string;
  onClick?: React.MouseEventHandler;
  checked?: boolean;
  defaultChecked?: boolean;
  name?: string;
  disabled?: boolean;
}
