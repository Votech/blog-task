export type PostCategory =
  | 'wiedza'
  | 'inspiracje'
  | 'interpretacje'
  | 'dostępne';

export type PostJsonPlaceholder = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type Post = PostJsonPlaceholder & {
  category: PostCategory;
  timestamp: number;
};
