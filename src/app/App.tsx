import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {Suspense} from "react";


export const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme as string])}>
      <Suspense fallback={<div>Loading ...</div>}>
        <Navbar/>
        <div className="content">
          <Sidebar/>
          <AppRouter/>
        </div>
      </Suspense>
    </div>
  )
    ;
};

export default App;
