import { PostCategory } from '@/types/blog';
import { CATEGORY_LIST } from '../constants';
import resolveColors from '../utils/resolveColors';
import resolveIcon from '../utils/resolveIcon';
import CategoryCard from './CategoryCard';

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
