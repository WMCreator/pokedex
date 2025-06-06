import { create } from "zustand";

interface SearchBarTypes {
  query: string;
  setQuery: (query: string) => void;
}

const useSearchBarStore = create<SearchBarTypes>((set) => ({
  query: "",
  setQuery: (query) => set({ query }),
}));

export default useSearchBarStore;
