import { useState } from "react";
import Buttons from "../component/Button/button";

function Nav({ todos, onSearch }) {
  // Accept onSearch as a prop
  const [search, setSearch] = useState("");

  function searchResult() {
    const foundTodo = todos.find((filtered) => search === filtered);
    if (foundTodo) {
      onSearch(foundTodo); // Send the search result back to UseState
    }
  }
  if (search === "") {
    onSearch(null);
  }
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="../src/assets/5e819a5ce865476b73087fd1276e7c3e.png"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            TODOS
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <div className="flex search-inp">
            <input
              type="search"
              value={search}
              placeholder="Search todos..."
              onKeyUp={(e) => (e.key === "Enter" ? searchResult() : null)}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <Buttons
              backColor={"#3488cc"}
              text={<i class="fa-solid fa-magnifying-glass"></i>}
              color={"white"}
              pd={"4px 15px"}
              onClick={searchResult}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
