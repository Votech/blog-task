'use client';

import { LIKED_POSTS_KEY } from '@/lib/constants';
import getLikedPosts from '@/lib/utils/getLikedPosts';
import { Star } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const isPostLiked = (id: string): boolean => {
  return getLikedPosts().includes(id);
};

const toggleLikedPost = (id: string) => {
  const likedPosts = getLikedPosts();
  const updatedLikedPosts = likedPosts.includes(id)
    ? likedPosts.filter((postId) => postId !== id)
    : [...likedPosts, id];
  localStorage.setItem(LIKED_POSTS_KEY, JSON.stringify(updatedLikedPosts));
};

export default function AddToLiked() {
  const params = useParams();
  const id = (params.id as string) || '';
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(isPostLiked(id));
  }, [id]);

  const handleToggle = () => {
    toggleLikedPost(id);
    setLiked((prev) => !prev);
  };

  return (
    <button
      onClick={handleToggle}
      className={`flex items-center gap-4 rounded-lg p-2 text-sm font-bold transition-all`}
    >
      <Star size={33} fill={liked ? 'black' : 'white'} />
      <span>Dodaj do ulubionych</span>
    </button>
  );
}
