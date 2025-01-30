import { PostCategory } from '@/types/blog';
import clsx from 'clsx';
import Image from 'next/image';

interface Props {
  category: PostCategory;
  onSelectCategory: (category: PostCategory) => void;
  imgSrc: string;
  Icon: React.ComponentType | null;
  textColor: string;
  bgColor: string;
  borderColor: string;
  selected: boolean;
}

export default function CategoryCard({
  category,
  onSelectCategory,
  imgSrc,
  Icon,
  bgColor = 'bg-category-green',
  borderColor = 'bg-category-green-dark',
  textColor = 'text-category-green',
  selected = true,
}: Props) {
  function handleClick() {
    onSelectCategory(category);
  }

  return (
    <div
      onClick={handleClick}
      className={clsx(
        'rounded-diagonal relative flex w-full cursor-pointer flex-col items-center overflow-hidden',
        bgColor,
      )}
    >
      {/* Overlay border */}
      {selected && (
        <div
          className={clsx(
            'rounded-diagonal absolute inset-0 border-[6px]',
            borderColor,
          )}
        />
      )}
      <Image src={imgSrc} alt={category} width={366} height={230}></Image>
      <div className="flex flex-col items-center gap-4 p-5">
        <p className={clsx('font-bold', textColor)}>{category.toUpperCase()}</p>
        {Icon && <Icon />}
      </div>
    </div>
  );
}
