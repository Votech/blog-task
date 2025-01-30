'use client';

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
  return (
    <div>
      <div className="hidden sm:block">
        <h2 className="pb-6 md:pb-10">Kategorie</h2>
      </div>

      <div className="flex justify-center sm:hidden">
        <CategoryCarousel
          onSelectCategory={onSelectCategory}
          selectedCategory={selectedCategory}
        />
      </div>

      <div className="hidden sm:block">
        <CategoryGrid
          onSelectCategory={onSelectCategory}
          selectedCategory={selectedCategory}
        />
      </div>
    </div>
  );
}
