"use client"
import {useAuth} from "@/context/authContext";
import Link from "next/link";
import Avatar from "@/app/(blog)/blogs/_components/Avatar";
import {Bars3Icon} from "@heroicons/react/24/solid";

function Header({setIsOpenDrawer ,isOpenDrawer}) {
  const { user, isLoading } = useAuth();
  return (
    <header className={`border-b border-secondary-200 bg-secondary-0 ${isLoading ? "bg-opacity-30 blur-md" : ""}`}>
      <div className="flex items-center justify-between px-4 py-4 lg:px-8">
        <div className="flex items-center gap-x-3">
            <button type="button" aria-label="باز کردن منو" onClick={()=>setIsOpenDrawer(prev=>!prev)} className={`rounded-lg p-1 hover:bg-secondary-100 lg:hidden ${isOpenDrawer && 'invisible'}`}><Bars3Icon className={'size-6'}/></button>
            <div><p className="text-xs text-secondary-500">خوش آمدید</p><span className="font-bold text-secondary-800">{user?.name || 'کاربر نکست بلاگ'}</span></div>
        </div>
        <div className="flex items-center gap-x-3">
          <Link href="/profile" aria-label="داشبورد من" className="rounded-xl p-1 transition-colors hover:bg-secondary-100">
            <Avatar name={user?.name} avatarUrl={user?.avatarUrl} width="32" height="32" showName={false} />
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Header;
