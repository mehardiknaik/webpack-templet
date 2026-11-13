import { HTMLAttributes, lazy, version } from 'react';
import style from '@/App.module.scss';
import webpackLogo from '@/assets/webpack.png';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import withSuspense from '@/HOC/withSuspense';
import { MDXProvider } from '@mdx-js/react';
import Guide from '@/components/guide.mdx';
const Read = lazy(() => import('@/components/README.md'));
import 'highlight.js/styles/github-dark.css';

const Counter = withSuspense(
  lazy(() => import(/* webpackChunkName: "counter" */ './components/Counter')),
  <div className={style.loader}>Loading Counter....</div>
);

const mdxComponents = {
  h1: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h1 style={{ color: '#1e293b', borderBottom: '1px solid #cbd5e1' }} {...props} />
  )
};

const App = () => {
  return (
    <div>
      <div>
        React <u>{process.env.APP_NAME}</u>
      </div>
      <div>
        App Name: <code>{window?.__env?.NAME}</code>
      </div>
      <div>
        Node Env: <code>{process.env.NODE_ENV}</code>
      </div>
      <div>
        App Version: <code>{__VERSION__}</code> | React Version: <code>{version}</code>
      </div>
      <div>
        Build Created At: <code>{__BUILD_DATE__}</code>
      </div>
      <div>
        Is Dev: <code>{__DEV__ ? 'True' : 'False'}</code>
      </div>
      <div>
        Is Prod: <code>{__PROD__ ? 'True' : 'False'}</code>
      </div>
      <div>
        Public Path: <code>{__webpack_public_path__}</code>
      </div>
      <div className={style.logoContainer}>
        <img loading="lazy" src="./react.svg" alt="React Logo" className={style.react} />
        <img loading="lazy" src={webpackLogo} alt="Webpack Logo" className={style.webpack} />
      </div>
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
      <MDXProvider components={mdxComponents}>
        <Guide />
        <Read />
      </MDXProvider>
    </div>
  );
};

export default App;
