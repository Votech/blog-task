import { CATEGORY_STYLES } from '@/lib/constants';
import { PostCategory } from '@/types/blog';

export default function resolveColors(category: PostCategory | '') {
  if (category === '') {
    return {
      background: '',
      borderColor: '',
      textColor: '',
      highlightColor: '',
    };
  }
  return (
    CATEGORY_STYLES[category] ?? {
      background: '',
      borderColor: '',
      textColor: '',
      highlightColor: '',
    }
  );
}
