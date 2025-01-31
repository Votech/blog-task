import { PostCategory } from '@/types/blog';
import { create } from 'zustand';

interface PostStore {
  category: PostCategory | '';
  shouldFilterLikedPosts: boolean;
  setCategory: (category: PostCategory | '') => void;
  setShouldFilterLikedPosts: (shouldFilter: boolean) => void;
}

const useGlobalStore = create<PostStore>((set) => ({
  category: '',
  shouldFilterLikedPosts: false,
  setCategory: (category) => set({ category }),
  setShouldFilterLikedPosts: (shouldFilter) =>
    set({ shouldFilterLikedPosts: shouldFilter }),
}));

export default useGlobalStore;
