import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { FruitList, IFruit } from "../../components/FruitList/FruitList";
import { ApplicationWrapper } from "../../components/layout/ApplicationWrapper";

interface TProps {
    frui: IFruit;
}
  

const FruiDetail: NextPage<TProps> = ({ frui }) =>{
    return (
        <ApplicationWrapper title={frui.Title}>
            <div className="flex flex-col justify-center text-white items-center p-12">
              <div className="flex flex-col md:flex-row md:max-w-xxl rounded-lg bg-white shadow-lg">
                  <img className=" w-full h-96 md:h-auto object-cover md:max-w-xl rounded-t-lg md:rounded-none md:rounded-l-lg" src={frui.Poster} alt={`${frui.Title} Poster`} />
                <div className="p-6 flex flex-col justify-start">
                    <h5 className="text-gray-900 text-xl font-medium mb-5">{frui.Title}</h5>
                    <p className="text-gray-700 text-base font-bold mb-0">
                         Product Description
                    </p>
                    <p className="text-gray-700 text-base mb-0">
                        Origin: {frui.Origin}
                    </p>
                    <p className="text-gray-700 text-base mb-0">
                        Certification: {frui.Certification}
                    </p>
                    <p className="text-gray-700 text-base mb-0">
                        Dealer: {frui.Dispenser}
                    </p>
                    <p className="text-gray-700 text-base mb-0">
                        Minerals: {frui.Minerals}
                    </p>
                    <p className="text-gray-700 text-base mb-0">
                        Packaging: {frui.Packaging}
                    </p>
                    <p className="text-gray-700 text-base mb-12">
                        Price: ${frui.Price}
                    </p>
                    <button type="button" className=" inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs 
                    leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none
                     focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">Confirm purchase</button>
                  <p className="flex text-gray-600 text-xs justify-center">The price is equivalent to one pound and the value of the currency is US dollars.</p>
                </div>
              </div>
            </div>
        </ApplicationWrapper>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/fruit/" + context.params?.id
    );
    const frui = await res.json();
  
    return {
      props: {
        frui,
      },
    };
  };
  

export default FruiDetail;