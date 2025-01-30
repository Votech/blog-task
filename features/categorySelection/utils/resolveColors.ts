import { PostCategory } from '@/types/blog';
import { CATEGORY } from '../constants';

export default function resolveColors(category: PostCategory) {
  const colors = {
    [CATEGORY.knowledge]: {
      bg: 'bg-category-blue',
      border: 'border-category-blue-dark',
      text: 'text-white',
    },
    [CATEGORY.inspirations]: {
      bg: 'bg-category-orange',
      border: 'border-category-orange-dark',
      text: 'text-silver-grey',
    },
    [CATEGORY.interpretations]: {
      bg: 'bg-category-red',
      border: 'border-category-red-dark',
      text: 'text-white',
    },
    [CATEGORY.available]: {
      bg: 'bg-category-green',
      border: 'border-category-green-dark',
      text: 'text-cold-blue',
    },
    default: {
      bg: 'bg-category-green',
      border: 'border-category-green-dark',
      text: 'text-category-green',
    },
  };

  return colors[category] || colors.default;
}
