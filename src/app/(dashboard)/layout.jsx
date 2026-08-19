"use client"
import Header from "@/app/(dashboard)/profile/components/Header";
import SideBar from "@/app/(dashboard)/profile/components/SideBar";
import {useState} from "react";


export default function ProfileLayout({ children }) {
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  return (
    <div className="bg-secondary-0">
      <div className="grid grid-cols-12 h-screen">
        <aside className={`col-span-5 lg:col-span-3 xl:col-span-2 hidden lg:block ${isOpenDrawer && '!block ' }`}>
          <SideBar setIsOpenDrawer={setIsOpenDrawer}  />
        </aside>
        <div className={`col-span-12 lg:col-span-9 xl:col-span-10  h-screen flex flex-col ${isOpenDrawer && '!col-span-7 ' }`}>
          <Header setIsOpenDrawer={setIsOpenDrawer} isOpenDrawer={isOpenDrawer} />
          <main className="bg-secondary-100 rounded-tr-3xl p-4 md:p-6 lg:p-10 flex-1 overflow-y-auto">
            <div className="xl:max-w-screen-xl">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
