import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import AppLink from "shared/ui/app-link/AppLink";



interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {},[className || ''])}>
      <div className={cls.links}>
        <AppLink to={'/'} className={cls.mainLink}>Main page</AppLink>
        <AppLink to={'/about'}>About</AppLink>
      </div>
    </div>
  );
};

