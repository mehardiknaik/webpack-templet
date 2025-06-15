import { lazy } from 'react';
import style from './App.module.css';
import webpackLogo from './assets/webpack.png';
import DemoError from './components/DemoError';
import { ErrorBoundary } from './components/ErrorBoundary';
import withSuspense from './HOC/withSuspense';

const Counter = withSuspense(
  lazy(() => import('./components/Counter')),
  <>Loading Counter....</>
);

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
      <Counter />
      <ErrorBoundary>
        <DemoError />
      </ErrorBoundary>
    </div>
  );
};

export default App;
