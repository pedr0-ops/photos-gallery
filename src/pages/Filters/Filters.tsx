import { Flex, RadioCards } from '@radix-ui/themes';
import React from 'react';
import { Label, RadioCard, RadioContainer } from './Filters.styles';
import { FilterOption, IFiltersProps } from './Filters.types';

const Filters = ({ onFilterChange = () => null }: IFiltersProps) => {
  const [selectedFilter, setSelectedFilter] = React.useState<FilterOption>({ label: 'Animais', value: '1' });

  const filterOptions: FilterOption[] = [
    { label: 'Animais', value: '1' },
    { label: 'Natureza', value: '2' },
    { label: 'Grandes cidades', value: '3' },
    { label: 'Imagens incriveis', value: '4' },
  ];

  const handleFilterChange = (filter: FilterOption) => {
    onFilterChange(filter);
    setSelectedFilter(filter);
  };

  return (
    <RadioContainer>
      <RadioCards.Root defaultValue={selectedFilter.value} columns={{ initial: '1', sm: '4' }}>
        {filterOptions.map((option) => (
          <RadioCard key={option.value} value={option.value} onClick={() => handleFilterChange(option)}>
            <Flex direction="column" width="100%">
              <Label weight="bold">{option.label}</Label>
            </Flex>
          </RadioCard>
        ))}
      </RadioCards.Root>
    </RadioContainer>
  );
};

export default Filters;
