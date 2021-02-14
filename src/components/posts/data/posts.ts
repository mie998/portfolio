// eslint-disable-next-line import/no-webpack-loader-syntax
import raw from 'raw.macro';
// import { ulid } from 'ulid';

const test = raw('./Markdown/test.md');
const chatwork = raw('./Markdown/20191009.md');
const blog_created = raw('./Markdown/20210212.md');

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
];
