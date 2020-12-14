export type Post = {
  id: number;
  title: string;
  date: string;
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
        title: '',
        date: '20210101',
        body: `**test**`,
      },
    ],
  },
};
