import resolveColors from '@/lib/utils/resolveColors';
import { PostCategory } from '@/types/blog';
import clsx from 'clsx';
import Image from 'next/image';
import resolveIcon from '../../utils/resolveIcon';

interface Props {
  cardCategory: PostCategory;
  onSelectCategory: (category: PostCategory) => void;
  selected: boolean;
  imagePriority?: boolean;
}

export default function CategoryCard({
  cardCategory,
  onSelectCategory,
  selected,
  imagePriority = true,
}: Props) {
  const { background, borderColor, textColor } = resolveColors(cardCategory);
  const Icon = resolveIcon(cardCategory);
  const imgSrc = `/images/${cardCategory}.webp`;

  return (
    <div
      onClick={() => onSelectCategory(cardCategory)}
      className={clsx(
        'rounded-diagonal-lg relative flex h-full min-h-72 w-60 w-full cursor-pointer flex-col items-center overflow-hidden xs:w-auto sm:min-h-0',
        background,
      )}
    >
      {/* Overlay border */}
      {selected && (
        <div
          className={clsx(
            'rounded-diagonal-lg absolute inset-0 border-[6px]',
            borderColor,
          )}
        />
      )}
      <Image
        priority={imagePriority}
        loading={imagePriority ? 'eager' : 'lazy'}
        src={imgSrc}
        alt={cardCategory}
        width={366}
        height={230}
      />
      <div className="flex flex-col items-center gap-4 p-6">
        <p className={clsx('font-bold', textColor)}>
          {cardCategory.toUpperCase()}
        </p>
        {Icon && <Icon />}
      </div>
    </div>
  );
}
