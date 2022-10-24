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
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{frui.Title}</h5>
                    <p className="text-gray-700 text-base mb-4">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </p>
                  <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
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