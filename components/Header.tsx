import "@/styles/_components/_header.scss";
import Link from "next/link";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="header">
      <Link href="/">
        <strong>PokeDex</strong>
      </Link>
      <SearchBar className="header__search" />
      <nav>
        <ul className="header__nav">
          {/* <li>
            <Link href="/pokemon">Pokemons</Link>
          </li> */}

          <li></li>
          {/* <li>
            <Link href="/liked">My likes</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
