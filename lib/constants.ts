import { PostCategory } from '@/types/blog';

export const CATEGORY: Record<string, PostCategory> = {
  knowledge: 'wiedza',
  inspirations: 'inspiracje',
  interpretations: 'interpretacje',
  available: 'dostępne',
};

export const CATEGORY_LIST: PostCategory[] = [
  CATEGORY.knowledge,
  CATEGORY.inspirations,
  CATEGORY.interpretations,
  CATEGORY.available,
];
