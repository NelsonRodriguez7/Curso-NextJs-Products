import React, { useEffect, useState } from "react";
import Frui from "./Frui/Frui";

export interface IFruit{
    Title: string;
    "Origin": string;
    "Price": number;
    "Minerals": string;
    "Dispenser": string;
    "Packaging": string;
    "Certification": string;
    id: number;
    Poster: string;
}

const useFruit = () => {
    const [fruit,setFruit] = useState<IFruit[]>([]);

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_API_URL+"/fruit")
          .then((res) => res.json())
          .then((data: IFruit[]) => setFruit(data.slice(0,10)))
          .catch((error) => console.error(error));
      }, []);
    
    return fruit;
}

export const FruitList = () => {
    const fruit = useFruit();
    return( <div className="flex flex-col justify-center text-white items-center p-6">
                <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                    {fruit.map((frui) => (
                        <Frui key={frui.id} frui = {frui}  />
                    ))}
                </ul>
           </div>
        );
};