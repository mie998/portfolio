export type Post = {
  id: number;
  title: string;
  date: number;
  body: string;
};

type TagPosts = {
  tagName: string;
  posts: Post[];
};

export type PostsData = {
  [tag: string]: TagPosts;
};

export const postsData: PostsData = {
  intern: {
    tagName: 'internship',
    posts: [
      {
        id: 1,
        title: 'インターンシップに行ってきました',
        date: 20210101,
        body: `**test**`,
      },
    ],
  },
  math: {
    tagName: 'math',
    posts: [
      {
        id: 2,
        title: '環準同型とは',
        date: 20210122,
        body: `**test**`,
      },
    ],
  },
};
