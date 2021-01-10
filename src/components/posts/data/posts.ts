import * as documentation from 'raw-loader!./Markdown/test.md'

export type Post = {
  id: string;
  title: string;
  date: number;
  tag: string;
  body: string;
};

export const postsData: Post[] = [
  {
    id: '0',
    title: 'テストtest',
    date: 100000,
    tag: 'test',
    body: documentation
  },
  {
    id: '1',
    title: 'インターンシップに行ってきました',
    date: 20210101,
    tag: 'intern',
    body: ``
  },

  {
    id: '2',
    title: '環準同型とは',
    date: 20210122,
    tag: 'math',
    body: ``,
  },
];
