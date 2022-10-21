import Link from "next/link";
import React, { FC } from "react";
import { IFruit } from "../FruitList";

interface TProps {
    frui: IFruit;
}

const Frui: FC<TProps> = ({frui}) =>{
    return <div>
        <li>
            <Link href={`/fruit/${frui.id}`}>
            <div className="hover:scale-110 transition duration-300 ease-in-out flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img className="w-full h-20 md:h-auto object-cover md:w-11 rounded-t-lg md:rounded-none md:rounded-l-lg" src={frui.Poster} alt={`${frui.Title} Poster`} />
            <div className="p-6 flex flex-col justify-start">
                <h5 className="text-gray-900 text-xl font-medium mb-2">{frui.Title}</h5>
                <p className="text-gray-700 text-xs mb-1">
                     Price: ${frui.Price}
                </p>
                <p className="text-gray-700 text-xs mb-3">
                    Packaging: {frui.Packaging}
                </p>
                
                <button type="button" className="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">Buy</button>
            </div>
            </div>
            </Link>
            
        </li>
    </div>;
};

export default Frui;
