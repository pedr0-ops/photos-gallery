export interface FilterOption {
  label: string;
  value: string;
}

export interface IFiltersProps {
  onFilterChange?: (filter: FilterOption) => void;
}