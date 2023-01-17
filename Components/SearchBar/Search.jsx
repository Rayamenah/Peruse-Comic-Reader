import Link from "next/link";

const Search = ({ id, MangaId, title }) => {
  return (
    <div
      key={id}
      className="z-10 p-2 bg-slate-700 h-10 w-full hover:underline text-neutral-100 overflow-hidden border border-slate-800"
    >
      <Link href={`Manga/${MangaId}`} className="overflow-hidden">
        <p>{title}</p>
      </Link>
    </div>
  );
};

export default Search;
