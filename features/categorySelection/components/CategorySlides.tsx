import { CATEGORY_LIST } from '@/lib/constants';
import useGlobalStore from '@/lib/store';
import CategoryCard from './CategoryCard/CategoryCard';

export default function CategorySlides() {
  const { category: selectedCategory, setCategory } = useGlobalStore();
  return CATEGORY_LIST.map((cardCategory, index) => (
    <div className="embla__slide flex justify-center" key={cardCategory}>
      <CategoryCard
        imagePriority={index === 0}
        cardCategory={cardCategory}
        onSelectCategory={setCategory}
        selected={cardCategory === selectedCategory}
      />
    </div>
  ));
}
