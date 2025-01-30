'use client';

import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import CategorySection from '@/features/categorySelection/components/CategorySection';
import { PostCategory } from '@/types/blog';
import { useState } from 'react';

export default function Home() {
  const [category, setCategory] = useState<PostCategory | ''>('');

  function handleSetCategory(category: PostCategory) {
    setCategory(category);
  }
  return (
    <div>
      <ContentWrapper>
        <h1 className="bg-primary">Blog Edukacyjny</h1>
      </ContentWrapper>
      <ContentWrapper className="bg-gray-100 py-6 md:py-10">
        <CategorySection
          selectedCategory={category}
          onSelectCategory={handleSetCategory}
        />
      </ContentWrapper>
    </div>
  );
}
