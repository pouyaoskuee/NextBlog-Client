import React from 'react';
import CustomLink from "@/ui/CustomLink";

function Header() {
    return (
        <header className={'flex justify-between shadow-lg shadow-secondary-100 p-4 mb-10'}>
            <ul className={'flex gap-6 container'}>
                <li><CustomLink href={'/'}>خانه</CustomLink></li>
                <li><CustomLink href={'/blog'}>بلاگ ها</CustomLink></li>
            </ul>
            <div>ورود</div>
        </header>
    );
}

export default Header;