import { RoutePath } from 'shared/config/route-config/route-config'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'

export interface SidebarItemType {
  path: string
  text: string
  Icon: React.SVGFactory
}

export const SidebarItemList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    text: 'Главная'
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: 'О сайте'
  },
  {
    path: RoutePath.profile,
    Icon: MainIcon,
    text: 'Профиль'
  }
]
