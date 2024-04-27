import { createSelector } from '@reduxjs/toolkit'
import { getAuthData } from 'entities/User'
import { RoutePath } from 'shared/config/route-config/route-config'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg'
import ArticleIcon from 'shared/assets/icons/article-20-20.svg'

import { type SidebarItemType } from '../types/sideBar'

export const getSideBarItems = createSelector(
  getAuthData,
  (data): SidebarItemType[] => {
    const sidebarItemList: SidebarItemType[] = [
      {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'MenuLinkMain'
      },
      {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'MenuLinkAbout'
      }
    ]

    if (data?.id) {
      sidebarItemList.push(
        {
          path: `${RoutePath.profile}/${data?.id}`,
          Icon: ProfileIcon,
          text: 'MenuProfileLink',
          authOnly: true
        },
        {
          path: RoutePath.article,
          Icon: ArticleIcon,
          text: 'MenuArticleLink',
          authOnly: true
        }
      )
    }

    return sidebarItemList
  }
)
