import { GoSearch } from "react-icons/go";

export default function Search() {
  return (
    <form className="searchbar">
      <div className="searchInputContainer">
        <input type="search" placeholder="SEARCH" className="search" />

        <GoSearch />
      </div>
    </form>
  );
}
