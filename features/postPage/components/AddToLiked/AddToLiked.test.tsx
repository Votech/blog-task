import { LIKED_POSTS_KEY } from '@/lib/constants';
import { fireEvent, render, screen } from '@testing-library/react';
import { useParams } from 'next/navigation';
import AddToLiked from './AddToLiked';

jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
}));

jest.mock('@/lib/utils/getLikedPosts', () =>
  jest.fn(() => JSON.parse(localStorage.getItem(LIKED_POSTS_KEY) || '[]')),
);

const mockUseParams = useParams as jest.MockedFunction<typeof useParams>;

describe('AddToLiked Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('renders button with correct initial state if not liked', () => {
    mockUseParams.mockReturnValue({ id: '1' });
    localStorage.setItem(LIKED_POSTS_KEY, JSON.stringify([]));

    render(<AddToLiked />);
    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('Dodaj do ulubionych');
  });

  test('renders button with correct initial state if liked', () => {
    mockUseParams.mockReturnValue({ id: '1' });
    localStorage.setItem(LIKED_POSTS_KEY, JSON.stringify([1]));

    render(<AddToLiked />);
    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('Usuń z ulubionych');
  });

  test('toggles like state on click', () => {
    mockUseParams.mockReturnValue({ id: '1' });
    localStorage.setItem(LIKED_POSTS_KEY, JSON.stringify([]));

    render(<AddToLiked />);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(button).toHaveTextContent('Usuń z ulubionych');
    expect(JSON.parse(localStorage.getItem(LIKED_POSTS_KEY) || '[]')).toContain(
      1,
    );

    fireEvent.click(button);
    expect(button).toHaveTextContent('Dodaj do ulubionych');
    expect(
      JSON.parse(localStorage.getItem(LIKED_POSTS_KEY) || '[]'),
    ).not.toContain(1);
  });

  test('updates when post ID changes', () => {
    mockUseParams.mockReturnValue({ id: '1' });
    localStorage.setItem(LIKED_POSTS_KEY, JSON.stringify([1]));

    const { rerender } = render(<AddToLiked />);
    expect(screen.getByRole('button')).toHaveTextContent('Usuń z ulubionych');

    mockUseParams.mockReturnValue({ id: '2' });

    rerender(<AddToLiked />);
    expect(screen.getByRole('button')).toHaveTextContent('Dodaj do ulubionych');
  });
});
