'use client';

import { CategoryCarousel } from './CategoryCarousel/CategoryCarousel';
import CategoryGrid from './CategoryGrid';

export default function CategorySection() {
  return (
    <>
      <div className="hidden sm:block">
        <h2 className="mb-6 md:mb-10">Kategorie</h2>
      </div>
      <div className="flex justify-center sm:hidden">
        <CategoryCarousel />
      </div>
      <div className="hidden sm:block">
        <CategoryGrid />
      </div>
    </>
  );
}
