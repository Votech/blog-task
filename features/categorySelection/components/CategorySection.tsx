'use client';

import useMobileVersion from '@/hooks/useMobileVersion';
import { PostCategory } from '@/types/blog';
import { CategoryCarousel } from './CategoryCarousel';
import CategoryGrid from './CategoryGrid';

interface Props {
  onSelectCategory: (category: PostCategory) => void;
  selectedCategory: PostCategory | '';
}

export default function CategorySelection({
  onSelectCategory,
  selectedCategory,
}: Props) {
  const isMobile = useMobileVersion(640);

  return (
    <div>
      {!isMobile && <h2 className="pb-6 md:pb-10">Kategorie</h2>}
      {isMobile ? (
        <div className="flex justify-center">
          <CategoryCarousel
            onSelectCategory={onSelectCategory}
            selectedCategory={selectedCategory}
          />
        </div>
      ) : (
        <CategoryGrid
          onSelectCategory={onSelectCategory}
          selectedCategory={selectedCategory}
        />
      )}
    </div>
  );
}
