import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import Modal from 'shared/ui/Modal/Modal'
import { useState } from 'react'

export const App = () => {
  const { theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={classNames('app', {}, [theme as string])}>
      <Navbar/>
      <Modal isOpen={isOpen} onClose={() => { setIsOpen(false) }} />
      <div className="content">
        <Sidebar/>
        <AppRouter/>
      </div>
    </div>
  )
}

export default App
