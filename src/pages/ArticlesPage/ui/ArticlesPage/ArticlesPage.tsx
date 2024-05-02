import { classNames } from 'shared/lib/classNames/classNames'
import { type FC } from 'react'
import { ArticleList, ArticleView } from 'entities/Article'
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article'

interface ArticlesPageProps {
  className?: string
}

const _ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const {
    className
  } = props

  return (
    <div className={classNames('', {}, [className])}>
      <ArticleList isLoading={true} view={ArticleView.BIG} articles={new Array(16).fill({
        id: '1',
        title: 'Javascript news',
        user: {
          id: '1',
          userName: 'Oleg',
          avatar: 'https://cdn-icons-png.flaticon.com/128/6070/6070879.png'
        },
        subtitle: 'Что нового в JS за 2024',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/120px-Unofficial_JavaScript_logo_2.svg.png',
        views: 1022,
        createdAt: '26.02.2022',
        type: [
          ArticleType.IT
        ],
        blocks: [
          {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
              'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
              'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.'
            ]
          },
          {
            id: '4',
            type: ArticleBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body lang="ru">\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>'
          },
          {
            id: '2',
            type: ArticleBlockType.IMAGE,
            src: 'https://habrastorage.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта'
          },
          {
            id: '5',
            type: ArticleBlockType.TEXT,
            paragraphs: [
              'Кстати, вы могли заметить (и, скорее всего, заметили, если набирали код самостоятельно), что в некоторых из вышеприведённых примеров, в конце строк, используется точка с запятой, а в некоторых — нет. В некоторых текст, который мы хотим вывести в консоль или в виде сообщения, обрамляется двойными кавычками, а в некоторых — одинарными. Возможно, сейчас вы задаётесь вопросом о том, почему это так, и о том, как, если разные варианты кода работают без ошибок, писать этот код правильно.',
              'Теперь, после того, как состоялось ваше первое знакомство с JavaScript, предлагаем подробнее поговорить об этом языке.'
            ]
          }
        ]
      })} />
    </div>
  )
}

export default _ArticlesPage
