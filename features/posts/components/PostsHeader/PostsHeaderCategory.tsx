import useGlobalStore from '@/lib/store';
import { X } from 'lucide-react';

export default function PostsHeaderCategory() {
  const { category, setCategory } = useGlobalStore();

  return (
    <div className="flex items-center gap-2">
      <p className="border-b-[3px] border-violet-red text-sm font-bold text-violet-red">
        {category.toUpperCase()}
      </p>
      <button
        onClick={() => setCategory('')}
        className="rounded p-1 transition-colors hover:bg-gray-100"
        aria-label="Unselect category"
      >
        <X className="size-4" />
      </button>
    </div>
  );
}
