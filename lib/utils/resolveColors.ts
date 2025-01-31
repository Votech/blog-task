import { CATEGORY } from '@/lib/constants';
import { PostCategory } from '@/types/blog';

export default function resolveColors(category: PostCategory) {
  const colors = {
    [CATEGORY.knowledge]: {
      bg: 'bg-category-blue',
      border: 'border-category-blue-dark',
      text: 'text-white',
      textColor: 'text-category-blue',
    },
    [CATEGORY.inspirations]: {
      bg: 'bg-category-orange',
      border: 'border-category-orange-dark',
      text: 'text-silver-grey',
      textColor: 'text-category-orange',
    },
    [CATEGORY.interpretations]: {
      bg: 'bg-category-red',
      border: 'border-category-red-dark',
      text: 'text-white',
      textColor: 'text-category-red',
    },
    [CATEGORY.available]: {
      bg: 'bg-category-green',
      border: 'border-category-green-dark',
      text: 'text-cold-blue',
      textColor: 'text-category-green',
    },
    default: {
      bg: 'bg-category-green',
      border: 'border-category-green-dark',
      text: 'text-category-green',
      textColor: 'text-category-green',
    },
  };

  return colors[category] || colors.default;
}
