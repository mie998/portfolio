# test

新年早々に面白そうな記事を見つけました。React での API 呼出しを最適化するために 「部分的にサーバサイドで実行するコンポーネントを作る」というもののようです。

長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い長い

A paragraph with _emphasis_ and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

## test

- Lists
- [ ] todo
- [x] done

A table:

| a   | b   |
| --- | --- |

### test

- うんち
- TypeScript
- console.log(unti)

> quote
>
> > what?

_Italic_

1. 諦めないこと
2. 信じ抜くこと

Here is some JavaScript code:

```js
export default defineComponent({
  setup() {
    const query = ref("")
    const suggestions = ref<string[]>([])
    watch(
      query,
      (q)=> fetch(`/api/autocomplete?query=${q}`)
              .then(res => suggestions.value = res.json())
    )
    return {
      query
      suggestions
    }
  }
});
```

![エビフライトライアングル](http://i.imgur.com/Jjwsc.jpg)

\(ax^2+bx+c=0\)
