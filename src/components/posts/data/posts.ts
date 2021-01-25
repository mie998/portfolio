// eslint-disable-next-line import/no-webpack-loader-syntax
import raw from 'raw.macro';

const test = raw('./Markdown/test.md');
const chatwork = raw('./Markdown/20191009.md');

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
];
