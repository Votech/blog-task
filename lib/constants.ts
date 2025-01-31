import { PostCategory } from '@/types/blog';

export const CATEGORY = {
  knowledge: 'wiedza',
  inspirations: 'inspiracje',
  interpretations: 'interpretacje',
  available: 'dostępne',
} as const;

export const CATEGORY_LIST: PostCategory[] = Object.values(CATEGORY);

export const LIKED_POSTS_KEY = 'likedPosts';

export const CATEGORY_STYLES: Record<
  PostCategory,
  {
    background: string;
    borderColor: string;
    textColor: string;
    highlightColor: string;
  }
> = {
  [CATEGORY.knowledge]: {
    background: 'bg-category-blue',
    borderColor: 'border-category-blue-dark',
    textColor: 'text-white',
    highlightColor: 'text-category-blue',
  },
  [CATEGORY.inspirations]: {
    background: 'bg-category-orange',
    borderColor: 'border-category-orange-dark',
    textColor: 'text-silver-grey',
    highlightColor: 'text-category-orange',
  },
  [CATEGORY.interpretations]: {
    background: 'bg-category-red',
    borderColor: 'border-category-red-dark',
    textColor: 'text-white',
    highlightColor: 'text-category-red',
  },
  [CATEGORY.available]: {
    background: 'bg-category-green',
    borderColor: 'border-category-green-dark',
    textColor: 'text-cold-blue',
    highlightColor: 'text-category-green',
  },
};
