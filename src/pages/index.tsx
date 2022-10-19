import type, { NextPage } from "next";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ApplicationWrapper } from '../components/layout/ApplicationWrapper'


type HomeProps = {
  response: string;
};

const Home: NextPage<HomeProps> = () => {
  return (
        <ApplicationWrapper title='Home'>
          <div className="grow flex justify-center items-center ">
            <h1 className="text-7xl font-bold underline">
              Pagina de Nelson!
            </h1> 
          </div>
        </ApplicationWrapper>
  );
};

export default Home
