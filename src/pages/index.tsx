import * as React from 'react';
import css from './index.module.scss'

import BasicDemo from "../components/BasicDemo"
const Home: React.FC = () => {
  return (
    <div className={css.container}>
      <BasicDemo></BasicDemo>
    </div>
  );
}

export default Home;