import type { Preview } from '@storybook/react'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator'
import 'app/styles/index.scss'
import { WithI18next } from 'shared/config/storybook/TranslationDecorator/TranslationDecorator'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    StyleDecorator,
    RouterDecorator,
    WithI18next
  ]
}

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', title: 'English' },
        { value: 'ru', title: 'Russian' }
      ],
      showName: true
    }
  }
}

export default preview
