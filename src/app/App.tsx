import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {Sidebar} from "widgets/Sidebar";


export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme as string])}>
            <Navbar/>
            <div className="content">
                <Sidebar/>
                <AppRouter/>
            </div>
        </div>
    );
};

export default App;
