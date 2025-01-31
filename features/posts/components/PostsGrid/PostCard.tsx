'use client';

import resolveColors from '@/lib/utils/resolveColors';
import { Post } from '@/types/blog';
import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  const textColor = resolveColors(post.category).textColor;

  return (
    <div key={post.id} className="rounded-diagonal-md bg-grey-light px-6 py-7">
      <div
        className={clsx(
          'mb-2 inline-block border-b-[3px] border-current text-sm font-bold italic',
          textColor,
        )}
      >
        {post.category.toUpperCase()}
      </div>
      <h2
        style={{ fontFamily: 'Playfair Display' }}
        className={`mb-5 text-lg font-bold`}
      >
        {post.title}
      </h2>
      <div
        style={{ fontFamily: 'Playfair Display' }}
        className="mb-5 font-bold"
      >
        {new Date(post.timestamp).toLocaleDateString()}
      </div>
      <p className="mb-5 text-sm">{post.body}</p>
      <Link
        href={`/post/${post.id}`}
        passHref
        className="flex items-center gap-2 text-sm font-bold"
      >
        zobacz więcej
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
