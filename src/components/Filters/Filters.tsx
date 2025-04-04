import { Flex } from '@radix-ui/themes';
import React from 'react';
import { Label, RadioCard, RadioContainer, RadioRoot } from './Filters.styles';
import { FilterOption, FilterType, IFiltersProps } from './Filters.types';

const Filters = ({ onFilterChange = () => null }: IFiltersProps) => {
  const [selectedFilter, setSelectedFilter] = React.useState<FilterOption>({ label: FilterType.MOVIES, value: '1' });

  const filterOptions: FilterOption[] = [
    { label: FilterType.MOVIES, value: '1' },
    { label: FilterType.ANIMALS, value: '2' },
    { label: FilterType.STREET_PHOTOGRAPHY, value: '3' },
    { label: FilterType.TRAVEL, value: '4' },
  ];

  const handleFilterChange = (filter: FilterOption) => {
    onFilterChange(filter);
    setSelectedFilter(filter);
  };

  return (
    <RadioContainer>
      <RadioRoot defaultValue={selectedFilter.value} columns={{ initial: '1', sm: '4' }}>
        {filterOptions.map((option) => (
          <RadioCard key={option.value} value={option.value} onClick={() => handleFilterChange(option)}>
            <Flex direction="column" width="100%">
              <Label weight="bold">{option.label}</Label>
            </Flex>
          </RadioCard>
        ))}
      </RadioRoot>
    </RadioContainer>
  );
};

export default Filters;
