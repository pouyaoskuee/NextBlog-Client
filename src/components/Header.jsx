"use client"
import CustomLink from "@/ui/CustomLink";
import {useAuth} from "@/context/authContext";
import {UserIcon} from "@heroicons/react/24/outline";
import Link from "next/link";

function Header() {
    const {user , isLoading} =  useAuth()
    return (
        <header className={'flex justify-between shadow-lg shadow-secondary-100 p-4 mb-10'}>
            <ul className={'flex gap-6 container'}>
                <li><CustomLink href={'/'}>خانه</CustomLink></li>
                <li><CustomLink href={'/blogs'}>بلاگ ها</CustomLink></li>
            </ul>
            <div className={`${isLoading && 'blur-sm'}`} >{user? <Link href={'/profile'}><UserIcon className={'size-7'}/></Link> : <Link href={'/signin'}>ورود</Link> }</div>
        </header>
    );
}

export default Header;