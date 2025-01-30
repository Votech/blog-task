import { PostCategory } from '@/types/blog';
import dynamic from 'next/dynamic';
import { CATEGORY, CATEGORY_LIST } from '../constants';
import CategoryCard from './CategoryCard';

const BookSvg = dynamic(() => import('../icons/Book'));
const CloudToolsSvg = dynamic(() => import('../icons/CloudTools'));
const GlassesSvg = dynamic(() => import('../icons/Glasses'));
const IdeaSvg = dynamic(() => import('../icons/Idea'));

const resolveIcon = (category: PostCategory) => {
  switch (category) {
    case CATEGORY.knowledge:
      return BookSvg;
    case CATEGORY.inspirations:
      return IdeaSvg;
    case CATEGORY.interpretations:
      return CloudToolsSvg;
    case CATEGORY.available:
      return GlassesSvg;
    default:
      return null;
  }
};

const resolveColors = (category: PostCategory) => {
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
};

interface Props {
  onSelectCategory: (category: PostCategory) => void;
  selectedCategory: PostCategory | '';
}

export default function CategoryCards({
  onSelectCategory,
  selectedCategory,
}: Props) {
  const categories = CATEGORY_LIST;
  return categories.map((category) => (
    <CategoryCard
      key={category}
      category={category}
      onSelectCategory={onSelectCategory}
      imgSrc={`/images/${category}.webp`}
      Icon={resolveIcon(category)}
      textColor={resolveColors(category).text}
      bgColor={resolveColors(category).bg}
      borderColor={resolveColors(category).border}
      selected={category === selectedCategory}
    />
  ));
}
