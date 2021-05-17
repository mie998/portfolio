// eslint-disable-next-line import/no-webpack-loader-syntax
import raw from 'raw.macro';

const test = raw('./Markdown/test.md');
const chatwork = raw('./Markdown/20191009.md');
const blog_created = raw('./Markdown/20210212.md');
const influence_science_and_practice = raw('./Markdown/20210309.md');
const tex_environment = raw('./Markdown/20210403.md');
const supporters_1on1 = raw('./Markdown/20210517.md');

export type Post = {
  id: string;
  title: string;
  date: string;
  tag: string[];
  body: string;
};

export const postsData: Post[] = [
  // {
  //   id: '0',
  //   title: 'テストtest',
  //   date: '2020/1/24',
  //   tag: ['test', 'intern', 'math', 'random'],
  //   body: test,
  // },
  {
    id: '1',
    title: 'chatworkにてインターンシップに行ってきました',
    date: '2019/10/09',
    tag: ['intern'],
    body: chatwork,
  },
  {
    id: '2',
    title: 'ポートフォリオサイトに個人ブログ機能を追加してみた',
    date: '2021/02/12',
    tag: ['React', 'MaterialUI', 'random'],
    body: blog_created,
  },
  {
    id: '3',
    title: '「影響力の武器」を読んだ',
    date: '2021/03/09',
    tag: ['books', 'phychology'],
    body: influence_science_and_practice,
  },
  {
    id: '4',
    title: 'docker や github actions を用いた tex 環境を作ってみた(無料)',
    date: '2021/04/03',
    tag: ['docker', 'tex', 'github actions'],
    body: tex_environment,
  },
  {
    id: '5',
    title: 'サポーターズの1on1イベントに参加してきたぞ！',
    date: '2021/05/16',
    tag: ['intern', 'event', ],
    body: supporters_1on1,
  }
];
