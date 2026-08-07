'use client'
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

function CustomLink({href , children }) {
    const path =  usePathname()

    return (
        <Link href={href} className={`${path===href&&'text-primary-900'}  `}>
            {children}
        </Link>
    );
}

export default CustomLink;