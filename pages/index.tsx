import type { NextPage } from 'next';
import axios from 'axios';

const Home: NextPage = (props) => {
  return <div></div>;
};

export default Home;

export const getServerSideProps = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const data = res.data;
  return {
    props: {
      data,
    },
  };
};
