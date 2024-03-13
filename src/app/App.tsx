import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import Modal from 'shared/ui/Modal/Modal'
import { useState } from 'react'

export const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={classNames('app')}>
      <Navbar/>
      <Modal isOpen={isOpen} onClose={() => {
        setIsOpen(false)
      }}/>
      <div className="content">
        <Sidebar/>
        <AppRouter/>
      </div>
    </div>
  )
}

export default App
