import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import AddToLiked from './AddToLiked';

export default function PostPageHeader() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <Link
        className="flex items-center gap-4 text-sm font-bold"
        href="/"
        passHref
      >
        <ArrowLeft size={20} />
        <h1>Blog Edukacyjny</h1>
      </Link>
      <AddToLiked />
    </div>
  );
}
