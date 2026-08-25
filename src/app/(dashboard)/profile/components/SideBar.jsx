"use client";
import { HomeIcon, XMarkIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import SideBarNavs from "./SideBarNavs";

function SideBar({setIsOpenDrawer})  {


  return (
    <div className="flex flex-col overflow-y-auto p-5">
        <button type="button" aria-label="بستن منو" onClick={()=>setIsOpenDrawer(false)} className={'mb-5 self-start rounded-lg p-1 hover:bg-secondary-100 lg:hidden'}><XMarkIcon className={'size-5'}/></button>
      <Link
        href="/"
        className="mb-7 flex items-center gap-x-3 border-b border-b-secondary-200 pb-5 text-lg font-black text-secondary-800"
      >
        <span className="flex size-9 items-center justify-center rounded-xl bg-primary-900 text-secondary-0"><HomeIcon className="size-5" /></span>
        <span>نکست بلاگ</span>
      </Link>
      <div className="flex flex-1 flex-col">
        <SideBarNavs />
      </div>
    </div>
  );
}
export default SideBar;
