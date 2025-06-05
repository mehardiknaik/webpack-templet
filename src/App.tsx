import { lazy, Suspense } from 'react';
import style from './App.module.css';
import webpackLogo from './assets/webpack.png';

const Counter = lazy(() => import('./components/Counter'));

const App = () => {
  return (
    <div className={style.container}>
      <div>
        React {process.env.APP_NAME} {process.env.NODE_ENV}
      </div>
      <div>App Name: {window?.__env?.NAME}</div>
      <div>Build Created At: {__BUILD_DATE__}</div>
      <div>Is Dev: {__DEV__ ? 'True' : 'False'}</div>
      <div>Is Prod: {__PROD__ ? 'True' : 'False'}</div>
      <div className={style['logo-container']}>
        <img src="./react.svg" alt="React Logo" className={style.react} />
        <img src={webpackLogo} alt="Webpack Logo" className={style.webpack} />
      </div>
      <Suspense fallback={<div>Loading Counter...</div>}>
        <Counter />
      </Suspense>
    </div>
  );
};

export default App;
