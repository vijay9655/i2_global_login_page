import Image from "next/image";
import Link from "next/link";
import Navbar from "./dashboard/Nav";

export default function Home(props) {
  const navname=[
    {img:"ABS Logo",url:"/"},
    {img:"Dashboard",url:"/create"},
    {img:"Leads",url:"/"},
    {img:"Customers",url:"/"},
    {img:"Suppliers",url:"/"},
    {img:"Vendor",url:"/"},
    {img:"Categories",url:"/"},
    {img:"Inventory",url:"/"},
    {img:"Settings",url:"/"},

   
  ]
  return (
    <div>
       
    <div className="grid grid-cols-12 gap-0 mb-2">
      {/* Left sidebar or header */}
      <div className="h-full rounded bg-gray-50 dark:bg-black col-span-1">
     
      { navname.map((e)=>(
        <div key={`${e.img}`} className="mt-1">
          <Link href={`${e.url}`} className="flex focus:ring-blue-500 focus:border-blue-500 items-center justify-center space-x-1 rtl:space-x-reverse focus:border-red-500 focus:ring-red-500 dark:focus:ring-red-500 dark:focus:border-red-500 text-2xl h-20 text-gray-400 dark:text-gray-500">
            <img className="h-8" src={`/static/${e.img}.svg`} alt={`${e.img}`} />
          </Link>
        </div>
      )) }
      </div>

      <div className="col-span-11  h-full rounded bg-gray-50 dark:bg-slate-50">
        <main className="text-2xl text-gray-400 dark:text-gray-500 w-full">
          {/* <Navbar />  */}
          {props.children}
        </main>
      </div>
    </div>
    </div>

  );
}
