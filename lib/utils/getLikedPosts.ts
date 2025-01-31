import { LIKED_POSTS_KEY } from '../constants';

export default function getLikedPosts(): number[] {
  if (typeof window === 'undefined') return [];
  return JSON.parse(localStorage.getItem(LIKED_POSTS_KEY) || '[]');
}
