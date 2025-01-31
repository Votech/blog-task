'use client';

import useGlobalStore from '@/lib/store';
import clsx from 'clsx';

function AllOrLikedButton({
  onClick,
  active,
  children,
}: {
  onClick: () => void;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'text-sm font-bold text-gray-700 transition-colors hover:text-violet-red',
        active
          ? 'border-b-[3px] border-violet-red font-bold text-violet-red'
          : 'border-b-[3px] border-transparent',
      )}
    >
      {children}
    </button>
  );
}

export default function PostsHeaderAllOrLiked() {
  const { shouldFilterLikedPosts, setShouldFilterLikedPosts } =
    useGlobalStore();

  return (
    <div className="flex items-center gap-2">
      <AllOrLikedButton
        onClick={() => setShouldFilterLikedPosts(false)}
        active={!shouldFilterLikedPosts}
      >
        WSZYSTKIE
      </AllOrLikedButton>
      <span className="text-gray-300">|</span>
      <AllOrLikedButton
        onClick={() => setShouldFilterLikedPosts(true)}
        active={shouldFilterLikedPosts}
      >
        ULUBIONE
      </AllOrLikedButton>
    </div>
  );
}
