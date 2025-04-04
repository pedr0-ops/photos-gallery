import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Filters from './Filters';
import { FilterType } from './Filters.types';

interface RadioCardItemProps {
  children: React.ReactNode;
  value: string;
  onClick?: React.MouseEventHandler;
  checked?: boolean;
  defaultChecked?: boolean;
  name?: string;
  disabled?: boolean;
}

jest.mock('@radix-ui/themes', () => ({
  Flex: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Box: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  RadioCards: {
    Root: ({ children }: { children: React.ReactNode }) => <div role="radiogroup">{children}</div>,
    Item: ({ children, value, onClick, checked, defaultChecked, name, disabled }: RadioCardItemProps) => (
      <div>
        <input
          type="radio"
          value={value}
          data-testid={`filter-option-${value}`}
          aria-checked={checked || defaultChecked || false}
          id={`radio-${value}`}
          onClick={onClick}
          checked={checked}
          defaultChecked={defaultChecked}
          name={name}
          disabled={disabled}
        />
        <label htmlFor={`radio-${value}`}>{children}</label>
      </div>
    ),
  },
  Text: ({ children }: { children: React.ReactNode }) => <span>{children}</span>,
}));

describe('Filters Component', () => {
  it('should render the Movies option', () => {
    render(<Filters />);
    expect(screen.getByText(FilterType.MOVIES)).toBeInTheDocument();
  });

  it('should render the Animals option', () => {
    render(<Filters />);
    expect(screen.getByText(FilterType.ANIMALS)).toBeInTheDocument();
  });

  it('should render the Street Photography option', () => {
    render(<Filters />);
    expect(screen.getByText(FilterType.STREET_PHOTOGRAPHY)).toBeInTheDocument();
  });

  it('should render the Travel option', () => {
    render(<Filters />);
    expect(screen.getByText(FilterType.TRAVEL)).toBeInTheDocument();
  });

  it('should call onFilterChange when clicking an option', () => {
    const onFilterChange = jest.fn();
    render(<Filters onFilterChange={onFilterChange} />);

    const travelOption = screen.getByText(FilterType.TRAVEL);
    fireEvent.click(travelOption);

    expect(onFilterChange).toHaveBeenCalledTimes(1);
  });

  it('should call onFilterChange with the correct value when clicking an option', async () => {
    const onFilterChange = jest.fn();
    render(<Filters onFilterChange={onFilterChange} />);

    const travelOption = screen.getByTestId('filter-option-4');
    fireEvent.click(travelOption);

    await waitFor(() => {
      expect(onFilterChange).toHaveBeenCalledWith({ label: FilterType.TRAVEL, value: '4' });
    });
  });

  it('should update the selection when clicking a different filter', () => {
    render(<Filters />);

    const travelOption = screen.getByTestId('filter-option-4');
    fireEvent.click(travelOption);

    expect(travelOption).toBeEnabled();
  });

  it('should select Movies option correctly', async () => {
    const onFilterChange = jest.fn();
    render(<Filters onFilterChange={onFilterChange} />);

    const moviesOption = screen.getByTestId('filter-option-1');
    fireEvent.click(moviesOption);

    await waitFor(() => {
      expect(onFilterChange).toHaveBeenCalledWith({ label: FilterType.MOVIES, value: '1' });
    });
  });

  it('should select Animals option correctly', async () => {
    const onFilterChange = jest.fn();
    render(<Filters onFilterChange={onFilterChange} />);

    const animalsOption = screen.getByTestId('filter-option-2');
    fireEvent.click(animalsOption);

    await waitFor(() => {
      expect(onFilterChange).toHaveBeenCalledWith({ label: FilterType.ANIMALS, value: '2' });
    });
  });

  it('should select Street Photography option correctly', async () => {
    const onFilterChange = jest.fn();
    render(<Filters onFilterChange={onFilterChange} />);

    const streetOption = screen.getByTestId('filter-option-3');
    fireEvent.click(streetOption);

    await waitFor(() => {
      expect(onFilterChange).toHaveBeenCalledWith({ label: FilterType.STREET_PHOTOGRAPHY, value: '3' });
    });
  });
});
