import React, { useState } from 'react';
import "./main.css";
import Link from 'next/link';

const Maintable = ({data}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const name = ["Latest Enquiries", "Property Company","Property Buyers", "Phone Number", "E-mail ID", "Address",];


  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex pb-4 p-4 bg-white dark:bg-white-900">
        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="block h-10 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-white-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for items"
          />
        </div>

        <div className='ps-2'>
          <Link  href={"/create"}
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="mt-1 border border-gray-300 rounded-lg h-10 bg-white-50 text-sm px-2 py-2.5 text-center inline-flex items-center dark:bg-white dark:hover:bg-gray-600 dark:focus:ring-white"
            type="button"
          >
            <img className="w-8 h-8 px-1 rounded-full" src="/static/navicon/plus.svg" alt="Avatar" />
            <p className="ml-2">Add New Customer</p>
          </Link>
        </div>

        <div className='ps-2 w-auto'>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="mt-1 border border-gray-300 rounded-lg h-10 bg-white-50 text-sm px-2 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-600 dark:focus:ring-white"
            type="button"
          >
            <img className="w-8 h-8 px-1 bg-white rounded-full" src="/static/navicon/upload.svg" alt="Avatar" />
            <p className="ml-2 text-black">Import Customers</p>
          </button>
        </div>

        {/* Here is the modification: remove float-right and use ml-auto to push the element to the right */}
        <div className='ml-auto flex'>
        <div className='ps-2'>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="mt-1 border border-gray-300 rounded-lg h-10 bg-white-50 text-sm px-2 py-2.5 text-center inline-flex items-center dark:bg-white dark:hover:bg-gray-600 dark:focus:ring-white"
            type="button"
          >
                       <img className="w-6 h-5 px-1 rounded-full" src="/static/navicon/printer.svg" alt="Avatar" />

            <p className="ml-2">print</p>
          </button>
        </div>

        <div className='ps-2 w-auto'>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="mt-1 border border-gray-300 rounded-lg h-10 bg-white-50 text-sm px-2 py-2.5 text-center inline-flex items-center "
            type="button"
          >
               <svg class="w-4 h-4 text-black dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"/>
</svg>
            <p className="ml-2 text-black">Download</p>
          </button>
        </div>
        </div>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-black">
        <thead className="text-xs text-gray-700 uppercase bg-white-50 dark:bg-gray-200 dark:text-black">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-white-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-white-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
              </div>
            </th>
            {name.map((e) => (
              <th scope="col" className="px-6 py-3">{e}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item,index) => (

            <tr key={index} className="bg-white border-b dark:bg-white-800 dark:border-gray-300 hover:bg-white-50 dark:hover:bg-white-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id={`checkbox-table-search-${item.id}`}
                    type="checkbox"
                    className="w-4 h-4 text-yellow-600 bg-yellow-100 border-yellow-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow dark:ring-offset-yellow-800 dark:focus:ring-offset-yellow-800 focus:ring-2 dark:bg-yellow dark:border-yellow"
                  />
                  <label htmlFor={`checkbox-table-search-${item.id}`} className="sr-only">checkbox</label>
                </div>
              </td>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">{item.id}</th>
              <td className="px-6 py-4">{item.data.Company_Name}</td>
              <td className="px-6 py-4">{item.data.Phone_Number}</td>
              <td className="px-6 py-4">{item.data.E_mail_ID}</td>
              <td className="px-6 py-4">{item.data.Address_Line_1}</td>
              <td className="px-6 py-4">{item.data.Authorised_Person_Name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Maintable;
