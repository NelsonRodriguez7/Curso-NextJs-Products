import Link from "next/link";
import React, { FC } from "react";
import { IFruit } from "../FruitList";

interface TProps {
    frui: IFruit;
}

const Frui: FC<TProps> = ({frui}) =>{
    return <div>
        <li>
            <Link href={`/movies/${frui.id}`}>
                <img className="cursor-pointer" src={frui.Poster} alt={`${frui.Title} Poster`} />
            </Link>
            <strong className="text-lg">{frui.Title}</strong>
        </li>
    </div>;
};

export default Frui;
