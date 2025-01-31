import { CATEGORY_LIST } from '@/lib/constants';
import resolveColors from '@/lib/utils/resolveColors';
import { PostCategory } from '@/types/blog';
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
