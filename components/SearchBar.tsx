"use client";

import { useRouter } from "next/navigation";
import "../styles/_components/_searchBar.scss";
import { Search } from "lucide-react";
import useSearchBarStore from "@/stores/SearchBarStore";

interface SearchBarProps {
  className?: string;
  onSearch?: (FormData: FormData) => void;
  [key: string]: unknown;
}

const SearchBar = ({ className, onSearch, ...props }: SearchBarProps) => {
  const router = useRouter();
  const classnames = `searchBar ${className ?? ""}`;
  const query = useSearchBarStore((state) => state.query);
  const setQuery = useSearchBarStore((state) => state.setQuery);

  const handleSearch = (FormData: FormData) => {
    const search = FormData.get("search");

    if (typeof search === "string" && search) {
      router.push(`/search?q=${encodeURIComponent(search.toLowerCase())}`);
    }
  };

  return (
    <form
      className={classnames}
      action={onSearch ?? handleSearch}
    >
      <input
        name="search"
        className="searchBar__input"
        placeholder="Search pokemon..."
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        {...props}
      />
      <button
        className="searchBar__button"
        title="Search"
      >
        <Search />
      </button>
    </form>
  );
};

export default SearchBar;
