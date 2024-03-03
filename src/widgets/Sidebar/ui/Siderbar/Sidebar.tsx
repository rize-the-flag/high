import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import React, {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";



interface SidebarProps {
  className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed(collapsed => !collapsed);
    }

  return (
    <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed},[className || ''])}>
        <button onClick={onToggle}>toggle</button>
        <div className={classNames(cls.switchers)}>
            <ThemeSwitcher/>
            {/*Lang switchers*/}
        </div>
    </div>
  );
};

