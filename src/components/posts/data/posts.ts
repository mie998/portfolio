// eslint-disable-next-line import/no-webpack-loader-syntax
import raw from 'raw.macro';

const test = raw('./Markdown/test.md');

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
    title: 'インターンシップに行ってきました',
    date: '2020/8/24',
    tag: 'intern',
    body: ``,
  },

  {
    id: '2',
    title: '環準同型とは',
    date: '2020/11/11',
    tag: 'math',
    body: ``,
  },
];
