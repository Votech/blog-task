export default function PostsHeaderSort() {
  return (
    <div className="flex flex-1 items-center gap-5">
      <p className="hidden flex-1 whitespace-nowrap lg:flex">Pokaż od:</p>
      <select
        className="flex-1 cursor-pointer appearance-none border-b border-gray-300 bg-white p-1 text-sm font-bold text-gray-700"
        aria-label="Pokaż od"
      >
        <option value="newest">Najnowsze wpisy</option>
        <option value="oldest">Najstarsze wpisy</option>
      </select>
    </div>
  );
}
