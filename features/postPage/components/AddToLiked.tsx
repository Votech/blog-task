import { Star } from 'lucide-react';

export default function AddToLiked() {
  return (
    <div className="flex items-center gap-4 text-sm font-bold">
      <Star size={33} />
      <span className="text-sm font-bold">Dodaj do ulubionych</span>
    </div>
  );
}
