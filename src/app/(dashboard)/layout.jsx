"use client"
import Header from "@/app/(dashboard)/profile/components/Header";
import SideBar from "@/app/(dashboard)/profile/components/SideBar";
import {useState} from "react";


export default function ProfileLayout({ children }) {
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  return (
    <div className="  bg-secondary-100">
      <div className="mx-auto flex h-screen max-w-[1600px]">
        {isOpenDrawer && <button aria-label="بستن منو" className="fixed inset-0 z-30 bg-secondary-900/30 lg:hidden" onClick={() => setIsOpenDrawer(false)} />}
        <aside className={`fixed inset-y-0 right-0 z-40 w-72 border-l border-secondary-200 bg-secondary-0 transition-transform duration-300 lg:static lg:w-64 lg:translate-x-0 ${isOpenDrawer ? 'translate-x-0' : 'translate-x-full'}`}>
          <SideBar setIsOpenDrawer={setIsOpenDrawer} />
        </aside>
        <div className="flex min-w-0 flex-1 flex-col">
          <Header setIsOpenDrawer={setIsOpenDrawer} isOpenDrawer={isOpenDrawer} />
          <main className="flex-1 overflow-auto  p-4 md:p-6 lg:p-8">
            <div className="mx-auto  max-w-7xl">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
