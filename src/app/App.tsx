import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { useTheme } from 'app/providers/ThemeProvider'
import { useSelector } from 'react-redux'
import { getHasAuthDataInit } from 'entities/User'

export const App = () => {
  const { theme } = useTheme()
  const hasAuthDataInit = useSelector(getHasAuthDataInit)

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar/>
      <div className="content">
        <Sidebar/>
        {hasAuthDataInit && <AppRouter/>}
      </div>
    </div>
  )
}

export default App
