export type Post = {
  id: number;
  title: string;
  date: number;
  tag: string;
  body: string;
};

export const postsData: Post[] = [
  {
    id: 1,
    title: 'インターンシップに行ってきました',
    date: 20210101,
    tag: 'intern',
    body: `**test**`,
  },
  {
    id: 2,
    title: '環準同型とは',
    date: 20210122,
    tag: 'math',
    body: `**test**`,
  },
];
