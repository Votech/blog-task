'use client';

import { CATEGORY_LIST } from '@/lib/constants';
import useGlobalStore from '@/lib/store';
import CategoryCard from './CategoryCard/CategoryCard';

export default function CategoryGrid() {
  const { category: selectedCategory, setCategory } = useGlobalStore();

  return (
    <div className="grid grid-cols-4 items-stretch gap-6 md:gap-10">
      {CATEGORY_LIST.map((cardCategory) => (
        <CategoryCard
          key={cardCategory}
          cardCategory={cardCategory}
          onSelectCategory={setCategory}
          selected={cardCategory === selectedCategory}
        />
      ))}
    </div>
  );
}
