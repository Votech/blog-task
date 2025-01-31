import { CATEGORY_LIST } from '@/lib/constants';
import useGlobalStore from '@/lib/store';
import CategoryCard from './CategoryCard';

export default function CategorySlides() {
  const { category: selectedCategory, setCategory } = useGlobalStore();
  return CATEGORY_LIST.map((cardCategory) => (
    <div className="embla__slide flex justify-center" key={cardCategory}>
      <CategoryCard
        cardCategory={cardCategory}
        onSelectCategory={setCategory}
        selected={cardCategory === selectedCategory}
      />
    </div>
  ));
}
