import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import AddToLiked from './AddToLiked/AddToLiked';

export default function PostPageHeader() {
  return (
    <div className="my-6 flex flex-col gap-4 md:my-10 md:flex-row md:items-center md:justify-between">
      <Link
        className="flex items-center gap-4 text-sm font-bold"
        href="/"
        passHref
      >
        <ArrowLeft size={20} />
        <h1 className="m-0">Blog Edukacyjny</h1>
      </Link>
      <AddToLiked />
    </div>
  );
}
