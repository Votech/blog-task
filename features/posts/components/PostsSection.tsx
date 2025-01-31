'use client';

import useGlobalStore from '@/lib/store';
import getLikedPosts from '@/lib/utils/getLikedPosts';
import { Post, PostJsonPlaceholder } from '@/types/blog';
import { AlertCircle, LoaderCircle } from 'lucide-react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { POSTS_LIMIT } from '../constants';
import useJsonPlaceholderInfinite from '../hooks/useJsonPlaceholderInfinite';
import getPostsWithMockData from '../lib/utils/getPostsWithMockData';
import PostsGrid from './PostsGrid/PostsGrid';
import PostsHeader from './PostsHeader/PostsHeader';

const getPostsToShow = (
  posts: PostJsonPlaceholder[],
  category: string,
  shouldFilterLikedPosts: boolean,
): Post[] => {
  let postsMapped = getPostsWithMockData(posts);

  if (shouldFilterLikedPosts) {
    const likedPosts = getLikedPosts();
    postsMapped = postsMapped.filter((post) => likedPosts.includes(post.id));
  }

  if (category) {
    postsMapped = postsMapped.filter((post) => post.category === category);
  }

  return postsMapped;
};

export default function PostsSection() {
  const { category, shouldFilterLikedPosts } = useGlobalStore();
  const { posts, size, setSize, isError } = useJsonPlaceholderInfinite();
  const postsToShow = getPostsToShow(posts, category, shouldFilterLikedPosts);
  const isFilterActived = !!category || shouldFilterLikedPosts;
  const hasMore = !isFilterActived && posts.length < POSTS_LIMIT;

  function handleNextPage() {
    if (!isFilterActived) {
      setSize(size + 1);
    }
  }

  if (isError) {
    return (
      <div className="flex justify-center">
        <div className="flex items-center justify-center gap-2 rounded-md border border-red-500 px-6 py-2 text-center">
          <AlertCircle size={32} className="text-red-500" />
          <p className="text-sm text-zinc-600">
            Oops! Something went wrong while loading the posts. Please try again
            later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 md:mb-10">
        <PostsHeader />
      </div>

      <InfiniteScroll
        dataLength={postsToShow.length}
        next={handleNextPage}
        hasMore={hasMore}
        scrollThreshold={1}
        loader={
          <div className="m-5 flex items-center justify-center text-center text-sm text-zinc-600">
            <LoaderCircle size={24} className="mr-3 animate-spin" />
            <p>Loading more posts...</p>
          </div>
        }
        endMessage={
          <div className="m-5">
            <p className="text-center text-sm text-zinc-600">
              You have reached the end! No more posts to show.
            </p>
          </div>
        }
      >
        <PostsGrid posts={postsToShow as Post[]} />
      </InfiniteScroll>
    </div>
  );
}
