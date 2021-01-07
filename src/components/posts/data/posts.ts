export type Post = {
  id: string;
  title: string;
  date: number;
  tag: string;
  body: string;
};

export const postsData: Post[] = [
  {
    id: '1',
    title: 'インターンシップに行ってきました',
    date: 20210101,
    tag: 'intern',
    body: `**test**
    jfdkjsfdjs
    fdjfkasjfld
    jkfdjsafdasf
    jdjfajs
    fdjaflfdkfjsalf
    jdfklsajflk`,
  },
  {
    id: '2',
    title: '環準同型とは',
    date: 20210122,
    tag: 'math',
    body: `**test**`,
  },
];
