'use client';

import useMobileVersion from '@/hooks/useMobileVersion';
import { PostCategory } from '@/types/blog';
import CategoryGrid from './CategoryGrid';

interface Props {
  onSelectCategory: (category: PostCategory) => void;
  selectedCategory: PostCategory | '';
}

function Carousel() {
  return <div>Carousel</div>;
}

export default function CategorySelection({
  onSelectCategory,
  selectedCategory,
}: Props) {
  const isMobile = useMobileVersion(640);

  return (
    <div>
      <h2 className="mg:pb-10 pb-5">Kategorie</h2>
      {isMobile ? (
        <Carousel />
      ) : (
        <CategoryGrid
          onSelectCategory={onSelectCategory}
          selectedCategory={selectedCategory}
        />
      )}
    </div>
  );
}
