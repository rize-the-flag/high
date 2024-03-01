import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar/ui/Navbar";


export const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme as string])}>
      <button onClick={toggleTheme}>
        {theme === "dark" ? 'dark theme' : 'bright theme'}
      </button>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
