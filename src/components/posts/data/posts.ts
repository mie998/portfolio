// eslint-disable-next-line import/no-webpack-loader-syntax
import raw from 'raw.macro';

const test = raw('./Markdown/test.md');
const chatwork = raw('./Markdown/20191009.md');

export type Post = {
  id: string;
  title: string;
  date: string;
  tag: string;
  body: string;
};

export const postsData: Post[] = [
  {
    id: '0',
    title: 'テストtest',
    date: '2020/1/24',
    tag: 'test',
    body: test,
  },
  {
    id: '1',
    title: 'chatworkにてインターンシップに行ってきました',
    date: '20191009',
    tag: 'intern',
    body: chatwork,
  },

  {
    id: '2',
    title: '環準同型とは',
    date: '2020/11/11',
    tag: 'math',
    body: ``,
  },
];
