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
            <div className="p-6 flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!">
                <img className="rounded-t-lg" src={frui.Poster} alt=""/>
              </a>
            <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{frui.Title}</h5>
              <p className="text-gray-700 text-base mb-4">
                Some quick example text to build on the card title and make up the bulk of the card's
                content.
              </p>
            <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Buy</button>
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