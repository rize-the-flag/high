import React, {Suspense} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {AppRouter} from "app/providers/router";



export const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme as string])}>
      <button onClick={toggleTheme}>
        {theme === "dark" ? 'dark theme' : 'bright theme'}
      </button>
      <Link to={'/'}>Main page</Link>
      <Link to={'/about'}>About</Link>
      <AppRouter />
    </div>
  );
};

export default App;
