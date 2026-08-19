"use client"
import {useAuth} from "@/context/authContext";
import ButtonIcon from "@/ui/ButtonIcon";
import Link from "next/link";
import Avatar from "@/app/(blog)/blogs/_components/Avatar";
import {Bars3Icon} from "@heroicons/react/24/solid";

function Header({setIsOpenDrawer ,isOpenDrawer}) {
  const { user, isLoading } = useAuth();
  return (
    <header className={`bg-secondary-0 ${isLoading ? "bg-opacity-30 blur-md" : ""}`}>
      <div className="flex items-center justify-between py-5 px-4 lg:px-8">
        <div className="flex items-center gap-x-3">
            <span onClick={()=>setIsOpenDrawer(prev=>!prev)} className={`sm:hidden ${isOpenDrawer && 'hidden'}`}><Bars3Icon className={'size-7'}/></span>
            <span>سلام؛ {user?.name}</span>
        </div>
        <div className="flex items-center gap-x-3">
          <Link href="/profile">
            <ButtonIcon
              color="outline"
              className={`border-secondary-200 rounded-2xl flex cursor-pointer items-center`}
            >
              <Avatar src={user?.avatarUrl} />
            </ButtonIcon>
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Header;
