import style from "./App.module.css";
import webpackLogo from "./assets/webpack.png"

const App = () => {
  return <div className={style.container}>
    <div>React Webpack App</div>
    <div className={style.logoContainer}>
    <img src="./react.svg" alt="React Logo" className={style.react} />
    <img src={webpackLogo} alt="Webpack Logo" className={style.webpack} />
    </div>
  </div>;
};

export default App;
