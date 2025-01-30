export default function PostsHeaderSort() {
  return (
    <div className="flex flex-1 items-center gap-5">
      <p className="hidden flex-1 lg:flex">Pokaż od:</p>
      <select
        className="flex-1 cursor-pointer appearance-none border-b border-gray-300 bg-white p-1 text-sm font-bold text-gray-700"
        aria-label="Pokaż od"
      >
        <option value="newest">Najnowsze wspisy</option>
        <option value="oldest">Najstarsze wspisy</option>
      </select>
    </div>
  );
}
