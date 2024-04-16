import { RoutePath } from 'shared/config/route-config/route-config'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg'

export interface SidebarItemType {
  path: string
  text: string
  Icon: React.SVGFactory
  authOnly?: boolean
}

export const SidebarItemList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    text: 'MenuLinkMain'
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: 'MenuLinkAbout'
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: 'MenuProfileLink',
    authOnly: true
  }
]
