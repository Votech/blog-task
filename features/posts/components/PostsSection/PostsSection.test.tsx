import { CATEGORY } from '@/lib/constants';
import useGlobalStore from '@/lib/store';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { POSTS_LIMIT } from '../../constants';
import useJsonPlaceholderInfinite from '../../hooks/useJsonPlaceholderInfinite';
import getPostsWithMockData from '../../utils/getPostsWithMockData';
import PostsSection from './PostsSection';

jest.mock('@/lib/store', () => jest.fn());
jest.mock('../../hooks/useJsonPlaceholderInfinite', () => jest.fn());
jest.mock('../../utils/getPostsWithMockData', () => jest.fn());

const mockUseGlobalStore = useGlobalStore as jest.MockedFunction<
  typeof useGlobalStore
>;
const mockUseJsonPlaceholderInfinite =
  useJsonPlaceholderInfinite as jest.MockedFunction<
    typeof useJsonPlaceholderInfinite
  >;
const mockGetPostsWithMockDataMock =
  getPostsWithMockData as jest.MockedFunction<typeof getPostsWithMockData>;
const mockSetSize = jest.fn();
const mockPosts = [
  {
    id: 1,
    userId: 1,
    title: 'Post 1',
    body: 'body 1',
    category: CATEGORY.knowledge,
  },
  {
    id: 2,
    userId: 2,
    title: 'Post 2',
    body: 'body 2',
    category: CATEGORY.inspirations,
  },
];

const mockedMappedPosts = mockPosts.map((post, index) => ({
  ...post,
  timestamp: index,
}));

describe('PostsSection', () => {
  beforeEach(() => {
    mockUseGlobalStore.mockReturnValue({
      category: '',
      shouldFilterLikedPosts: false,
    });
    mockUseJsonPlaceholderInfinite.mockReturnValue({
      posts: mockPosts,
      size: 1,
      setSize: jest.fn(),
      isError: false,
      isLoading: false,
    });
    mockGetPostsWithMockDataMock.mockReturnValue(mockedMappedPosts);
  });

  test('renders a proper message when reaching the end of the posts', () => {
    mockUseJsonPlaceholderInfinite.mockReturnValue({
      // Create an array of posts that will reach the limit
      posts: Array.from({ length: POSTS_LIMIT }, (_, index) => ({
        ...mockPosts[0],
        id: index,
        userId: index,
      })),
      size: 1,
      setSize: jest.fn(),
      isError: false,
      isLoading: false,
    });
    render(<PostsSection />);
    expect(screen.getByText(/You have reached the end/)).toBeInTheDocument();
  });

  test('displays error message when there is an error', () => {
    mockUseJsonPlaceholderInfinite.mockReturnValue({
      posts: [],
      size: 1,
      setSize: jest.fn(),
      isError: true,
      isLoading: false,
    });
    render(<PostsSection />);
    expect(screen.getByText(/Oops! Something went wrong/)).toBeInTheDocument();
  });

  test('renders PostsGrid with posts', () => {
    render(<PostsSection />);
    expect(screen.getByText('Post 1')).toBeInTheDocument();
    expect(screen.getByText('Post 2')).toBeInTheDocument();
  });

  test('calls handleNextPage when scrolling for more posts', () => {
    mockUseJsonPlaceholderInfinite.mockReturnValue({
      posts: mockPosts,
      size: 1,
      setSize: mockSetSize,
      isError: false,
      isLoading: false,
    });
    render(<PostsSection />);
    fireEvent.scroll(window, { target: { scrollY: 1000 } });
    expect(mockSetSize).toHaveBeenCalledWith(2);
  });
});
