import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ApplicationWrapper } from '../../components/layout/ApplicationWrapper'
import { FruitList } from '../../components/FruitList/FruitList'


type Tprops = {
  response: string;
};

const Buy: NextPage<Tprops> = () => {
  return (
        <ApplicationWrapper title='Buy'>
          <h1 className="text-3xl font-bold underline">Buy Fruit</h1>
          <FruitList /> 
        </ApplicationWrapper>
  );
};

export default Buy
