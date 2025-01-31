import { act, fireEvent, render, screen } from '@testing-library/react';
import useEmblaCarousel from 'embla-carousel-react';
import { CategoryCarousel } from './CategoryCarousel';

jest.mock('embla-carousel-react', () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockScrollNext = jest.fn();
const mockScrollPrev = jest.fn();
const mockScrollTo = jest.fn();
const mockOn = jest.fn();
const mockOff = jest.fn();
const mockSelectedScrollSnap = jest.fn(() => 0);
const mockScrollSnapList = jest.fn(() => [0, 1, 2]);

describe('CategoryCarousel', () => {
  beforeEach(() => {
    (useEmblaCarousel as unknown as jest.Mock).mockReturnValue([
      jest.fn(),
      {
        scrollNext: mockScrollNext,
        scrollPrev: mockScrollPrev,
        scrollTo: mockScrollTo,
        on: mockOn,
        off: mockOff,
        selectedScrollSnap: mockSelectedScrollSnap,
        scrollSnapList: mockScrollSnapList,
      },
    ]);
  });

  it('renders without crashing', async () => {
    await act(async () => {
      render(<CategoryCarousel />);
    });
    expect(
      screen.getByRole('button', { name: /chevronleft/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /chevronright/i }),
    ).toBeInTheDocument();
  });

  it('calls scrollPrev when left arrow is clicked', async () => {
    await act(async () => {
      render(<CategoryCarousel />);
    });
    const leftArrow = screen.getByRole('button', { name: /:chevronleft/i });
    fireEvent.click(leftArrow);
    expect(mockScrollPrev).toHaveBeenCalledTimes(1);
  });

  it('calls scrollNext when right arrow is clicked', async () => {
    await act(async () => {
      render(<CategoryCarousel />);
    });
    const rightArrow = screen.getByRole('button', { name: /chevronright/i });
    fireEvent.click(rightArrow);
    expect(mockScrollNext).toHaveBeenCalledTimes(1);
  });

  it('updates the selected dot when slide changes', async () => {
    await act(async () => {
      render(<CategoryCarousel />);
    });
    expect(mockOn).toHaveBeenCalledWith('select', expect.any(Function));
  });
});
