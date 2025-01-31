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

interface Props {
  onToggleLikedPostsFilter: (shouldFilterLikedPosts: boolean) => void;
  shouldFilterLikedPosts: boolean;
}

export default function PostsHeaderAllOrLiked({
  onToggleLikedPostsFilter,
  shouldFilterLikedPosts,
}: Props) {
  return (
    <div className="flex items-center gap-2">
      <AllOrLikedButton
        onClick={() => onToggleLikedPostsFilter(false)}
        active={!shouldFilterLikedPosts}
      >
        WSZYSTKIE
      </AllOrLikedButton>
      <span className="text-gray-300">|</span>
      <AllOrLikedButton
        onClick={() => onToggleLikedPostsFilter(true)}
        active={shouldFilterLikedPosts}
      >
        ULUBIONE
      </AllOrLikedButton>
    </div>
  );
}
