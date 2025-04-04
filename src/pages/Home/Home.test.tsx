import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './Home';
import ImagesService from '../../services/imagesService/ImagesService';
import { RadioCardItemPropsMock } from '../../components/Filters/Filters.types';

jest.mock('@radix-ui/themes', () => ({
  Flex: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Box: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  RadioCards: {
    Root: ({ children }: { children: React.ReactNode }) => <div role="radiogroup">{children}</div>,
    Item: ({ children, value, onClick, checked, defaultChecked, name, disabled }: RadioCardItemPropsMock) => (
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
  Skeleton: ({ children }: { children: React.ReactNode }) => <span data-testid="skeleton">{children}</span>,
}));

jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
    success: jest.fn(),
    info: jest.fn(),
    warning: jest.fn(),
  },
  ToastContainer: () => <div data-testid="toast-container" />,
}));

jest.mock('../../services/imagesService/imagesService');
const imageServiceMock = ImagesService as jest.Mocked<typeof ImagesService>;

const mockImages = [
  {
    id: '1',
    alt_description: 'Image 1',
    urls: {
      full: 'https://example.com/full1.jpg',
      regular: 'https://example.com/regular1.jpg',
      small: 'https://example.com/small1.jpg',
      thumb: 'https://example.com/thumb1.jpg',
    },
  },
  {
    id: '2',
    alt_description: 'Image 2',
    urls: {
      full: 'https://example.com/full2.jpg',
      regular: 'https://example.com/regular2.jpg',
      small: 'https://example.com/small2.jpg',
      thumb: 'https://example.com/thumb2.jpg',
    },
  },
];

const queryClient = new QueryClient();

describe('Home Component', () => {
  beforeEach(() => {
    imageServiceMock.getImages.mockImplementation(jest.fn());

    jest.clearAllMocks();
  });

  it('should render loading skeletons when images are loading', async () => {
    (imageServiceMock.getImages as jest.Mock).mockResolvedValueOnce({ results: [], total: 0, total_pages: 0 });

    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );

    expect(screen.getAllByTestId('skeleton')).toHaveLength(12);
  });

  it('should render images when API request succeeds', async () => {
    (imageServiceMock.getImages as jest.Mock).mockResolvedValueOnce({ results: mockImages, total: 2, total_pages: 1 });

    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );

    expect(await screen.findByAltText('Image 1')).toBeInTheDocument();
  });
});
