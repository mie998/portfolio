## site

[my site](https://mie998.github.io/portfolio/)

## TODO

Works.tsx において、カードのホバー時にアクションが欲しい。カードの色が変わるなど、クリックすることができる、というフィードバックは必要。
-> 付けたけどダサいから要改善

Skills.tsx はカードにしたい。固定長のデザインにしてくれ。アイコンも追加するといいかも。

どうせなら blog 記事にタグを付けたい。
[react-markdown](https://github.com/remarkjs/react-markdown)
を使いたいので、記事を json で扱い、
id, title, tag, date, body くらいで用意しておきたい。

# xxx(非常にまずい問題点)

- Property 'posts' is missing in type '{}' but required in type 'Props'. TS2741 とでてしまい、各コンポーネントにおけるデフォルト props の適用がうまく行っていない様子。
  現状、type 定義の方を not required にすることで難を逃れている感じがあるが、これは正直許容したくない。
  何が悪いのか今のところわかってないので、がんばれ。

- ReactMarkDown もうまくテキスト出力できていないっぽい。この辺、何ができて何ができないのか明確にしておく必がありそう
