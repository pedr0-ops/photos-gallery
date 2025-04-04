import { render, screen } from '@testing-library/react';
import SkeletonCard from './SkeletonCard';

jest.mock('@radix-ui/themes', () => ({
  Skeleton: ({ width, height }: { width: string; height: string }) => (
    <div data-testid="skeleton" style={{ width, height }} />
  ),
}));

describe('SkeletonCard', () => {
  it('should render the Skeleton component', () => {
    render(<SkeletonCard />);

    const skeletonElement = screen.getByTestId('skeleton');
    expect(skeletonElement).toBeInTheDocument();
  });
});
