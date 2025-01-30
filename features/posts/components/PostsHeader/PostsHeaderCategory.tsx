import { PostCategory } from '@/types/blog';
import { X } from 'lucide-react';

interface Props {
  category: PostCategory | '';
  onUnselectCategory: () => void;
}

export default function PostsHeaderCategory({
  category,
  onUnselectCategory,
}: Props) {
  const handleUnselectCategory = () => {
    onUnselectCategory();
  };
  return (
    <div className="flex items-center gap-2">
      <p className="border-b-[3px] border-violet-red text-sm font-bold text-violet-red">
        {category.toUpperCase()}
      </p>
      <button
        onClick={handleUnselectCategory}
        className="rounded p-1 transition-colors hover:bg-gray-100"
        aria-label="Unselect category"
      >
        <X className="size-4" />
      </button>
    </div>
  );
}
