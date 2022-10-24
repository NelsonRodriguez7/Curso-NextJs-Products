import Head from "next/head";
import React,{FC, PropsWithChildren} from "react";
import { Foo } from "../common/Foo";
import { Nav } from "../common/Nav";

interface Tprops{
    title: string;
    description?: string;
}

export const ApplicationWrapper: FC<PropsWithChildren <Tprops>> = ({
    title,
    description,
    children,
}) => {
    return (
    <div className="bg-orange-100 min-h-screen flex flex-col">
        <Head>
            <title>{title} | Fruits Panama</title>
            {description && <meta name="description" content={description} />}
            <link rel="icon" href="/images/pestaña_logo.png" />
        </Head>
        <header className="text-black bg-white h-20">
            <Nav />
        </header>
        <main className="grow flex flex-col text-white">{children}</main>
        <footer className="flex p-6 h-20 text-black bg-white items-center justify-center">
        <Foo />
      </footer>
    </div>
    );
}