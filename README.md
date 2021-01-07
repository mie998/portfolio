# site

[my site](https://mie998.github.io/portfolio/)

## 進捗管理

- [ ] 各種コンポーネントの作成とそれぞれのルーティングを実装
- [ ] DescribePost コンポーネントで markdown 記法の記事がきちんと反映されるようにする
- [ ] markdown のみ別のファイルに切り出し、いい感じに json にパースできる処理を posts.ts に追加する。
- [ ] post コンポーネントのデザインを考える.
- [ ] Read More!の実装(Home ように recent posts コンポーネントを追加したい) 単なる Link でもいいかもしれない。とりあえず Recent Posts コンポーネントは必須.
- [ ]
- [ ]
- [ ]

## xxx

- [x] react-router のことがわかっていないかもしれない。tagpost と describepost を並列にルーティングしているつもりだけど、これじゃ url から id などのパラメータを取得できなくて、先に記述したコンポーネントしか反映されない。url から取得するパラメータの型によってルーティングを変える、みたいなことができるかどうかを把握する必要性がある。

- [ ] 今は tagCode をキーとして Post 配列を value とする連想配列が組まれているけど、これ本当に必要か？少なくとも TagCode と TagName の 2 つがあるのが冗長に思える.

- [ ] post から About とかを押すとバグる.というかハッシュが無効だから意味なし。post には header を入れないという選択肢もある.
