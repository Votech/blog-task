import { PostCategory } from '@/types/blog';
import CategoryCards from './CategoryCards';

interface Props {
  onSelectCategory: (category: PostCategory) => void;
  selectedCategory: PostCategory | '';
}

export default function CategoryGrid({
  onSelectCategory,
  selectedCategory,
}: Props) {
  return (
    <div className="grid grid-cols-4 gap-5 md:gap-10">
      <CategoryCards
        onSelectCategory={onSelectCategory}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}
