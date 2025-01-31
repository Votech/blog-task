import { LIKED_POSTS_KEY } from '../constants';

export default function getLikedPosts(): string[] {
  if (typeof window === 'undefined') return [];
  return JSON.parse(localStorage.getItem(LIKED_POSTS_KEY) || '[]');
}
