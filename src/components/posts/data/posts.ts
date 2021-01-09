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
    body: `## test

新年早々に面白そうな記事を見つけました。ReactでのAPI呼出しを最適化するために 「部分的にサーバサイドで実行するコンポーネントを作る」というもののようです。

長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い

A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |

- うんち
- TypeScript
- console.log(unti)

> quote
>> what?

*Italic*

1. 諦めないこと
2. 信じ抜くこと

Here is some JavaScript code:

~~~js
console.log('It works!')
~~~
`
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
