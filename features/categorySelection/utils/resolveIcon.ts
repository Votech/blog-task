import { PostCategory } from '@/types/blog';
import dynamic from 'next/dynamic';
import { CATEGORY } from '../../../lib/constants';

const BookSvg = dynamic(() => import('../icons/Book'));
const CloudToolsSvg = dynamic(() => import('../icons/CloudTools'));
const GlassesSvg = dynamic(() => import('../icons/Glasses'));
const IdeaSvg = dynamic(() => import('../icons/Idea'));

export default function resolveIcon(category: PostCategory) {
  switch (category) {
    case CATEGORY.knowledge:
      return BookSvg;
    case CATEGORY.inspirations:
      return IdeaSvg;
    case CATEGORY.interpretations:
      return CloudToolsSvg;
    case CATEGORY.available:
      return GlassesSvg;
    default:
      return null;
  }
}
