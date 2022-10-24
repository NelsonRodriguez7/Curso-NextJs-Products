import Link from "next/link";
import React, { FC }  from "react";

export const Nav:FC = () =>{
    return(
        <nav className="w-full flex gap-5 p-4 items-center text-2xl">
            <img src="/images/nav_logo2.png"  alt="" loading="lazy" />
            <Link href="/">
                    <a>Home</a>
            </Link>
            {/* -- 5px -- */}
            <Link href="/fruit">
                    <a>Buy</a>
            </Link>    
            </nav>
    );
};

