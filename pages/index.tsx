import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const getData = async () => {
    const resp = await fetch('http://localhost:3000/api/hello');
    const data = await resp.json();
    console.log(data);
  };

  getData()

  return (
    <div className={styles.container}>
      <h1>Hello tiktak clone!</h1>
    </div>
  );
};

export default Home;
