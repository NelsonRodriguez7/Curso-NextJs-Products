import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { IFruit } from "../../components/FruitList/FruitList";
import { ApplicationWrapper } from "../../components/layout/ApplicationWrapper";

interface TProps {
    frui: IFruit;
}
  

const FruiDetail: NextPage<TProps> = ({ frui }) =>{
    return (
        <ApplicationWrapper title={frui.Title}>
            <h1>{frui.Title}</h1>
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