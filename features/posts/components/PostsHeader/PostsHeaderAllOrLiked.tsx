export default function PostsHeaderAllOrLiked() {
  return (
    <div className="flex items-center gap-2">
      <button className="text-sm font-bold text-gray-700 transition-colors hover:text-violet-red">
        WSZYSTKIE
      </button>
      <span className="text-gray-300">|</span>
      <button className="text-sm font-bold text-gray-700 transition-colors hover:text-violet-red">
        ULUBIONE
      </button>
    </div>
  );
}
