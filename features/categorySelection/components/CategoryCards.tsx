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
  return CATEGORY_LIST.map((category) => {
    const { background, borderColor, textColor } = resolveColors(category);

    return (
      <CategoryCard
        key={category}
        category={category}
        onSelectCategory={onSelectCategory}
        imgSrc={`/images/${category}.webp`}
        Icon={resolveIcon(category)}
        textColor={textColor}
        bgColor={background}
        borderColor={borderColor}
        selected={category === selectedCategory}
      />
    );
  });
}
