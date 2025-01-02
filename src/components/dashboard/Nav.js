import React from 'react';
import "../../../pages/global.css";

export default function Nav() {
  return (
    <div style={{ background: "#ededed" }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 p-2 dark:bg-white">
      {/* First section (Search and Toggle) */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-4">
        <div className="grid grid-cols-10 gap-2">
          <div className="col-span-1 flex items-center justify-center">
            <img className="h-8 w-5 rounded-lg" src="/static/navicon/Toggle.svg" alt="Toggle" />
          </div>
          <form className="max-w-md col-span-9">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block h-8 w-full pl-8 text-sm text-gray-900 border border-gray-100 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:text-gray-900 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-300 dark:focus:border-gray-300"
                placeholder="Search"
                required
              />
            </div>
          </form>
        </div>
      </div>

      {/* Second Section (Configuration and User Info) */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-6 flex justify-end">
  <button
    id="dropdownDefaultButton"
    data-dropdown-toggle="dropdown"
    className="h-10 text-sm px-2 py-2.5 text-center inline-flex items-center dark:hover:bg-gray-600 dark:focus:ring-white"
    type="button"
  >
    <svg
      className="w-4 h-4 text-gray-800 dark:text-black"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 21"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C15 15.4 15 16 14.462 16H1.538C1 16 1 15.4 1 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 8 3.464ZM4.54 16a3.48 3.48 0 0 0 6.92 0H4.54Z"
      />
    </svg>
    <img className="px-2 h-4" src="/static/navicon/Configuration.svg" alt="" />
  </button>

  <button
    id="dropdownDefaultButton"
    data-dropdown-toggle="dropdown"
    className="h-10 text-sm px-2 py-2.5 text-center inline-flex items-center dark:bg-white dark:hover:bg-gray-600 dark:focus:ring-white"
    type="button"
  >
    <img
      className="w-6 h-8 px-1"
      src="/static/navicon/Frame 35211.svg"
      alt="Avatar"
    />
    <p className="text-left w-full ml-2">ABS erp &nbsp;&nbsp;&nbsp;</p>
    <svg
      className="w-3.5 h-2.5 ms-3"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 1 4 4 4-4"
      />
    </svg>
  </button>
</div>


      {/* Third Section (User Info Avatar) */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-2 flex justify-end items-center">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="h-10 text-sm px-2 py-2.5 text-center inline-flex items-center dark:bg-white dark:hover:bg-gray-600 dark:focus:ring-white"
          type="button"
        >
          <img className="w-8 h-8 px-1 rounded-full" src="/static/navicon/unsplash_GEVWW-Y7MRA.svg" alt="Avatar" />
          <p className="ml-2">Manoj Kumar</p>
          <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>
      </div>
    </div>
  );
}
