import raw from 'raw.macro';

const chatwork = raw('./Markdown/20191009.md');
const blogCreated = raw('./Markdown/20210212.md');
const influenceScienceAndPractice = raw('./Markdown/20210309.md');
const texEnvironment = raw('./Markdown/20210403.md');
const supporters1on1 = raw('./Markdown/20210517.md');
const gotDomain = raw('./Markdown/20210619.md');
const JSAT1day = raw('./Markdown/20210619.md');

export type Post = {
  id: string;
  title: string;
  date: string;
  tag: string[];
  body: string;
};

export const postsData: Post[] = [
  {
    id: '1',
    title: 'chatworkにてインターンシップに行ってきました',
    date: '2019/10/09',
    tag: ['intern'],
    body: chatwork,
  },
  {
    id: '2',
    title: 'ポートフォリオサイトに個人ブログ機能を追加してみた',
    date: '2021/02/12',
    tag: ['React', 'MaterialUI', 'random'],
    body: blogCreated,
  },
  {
    id: '3',
    title: '「影響力の武器」を読んだ',
    date: '2021/03/09',
    tag: ['books', 'phychology'],
    body: influenceScienceAndPractice,
  },
  {
    id: '4',
    title: 'docker や github actions を用いた tex 環境を作ってみた(無料)',
    date: '2021/04/03',
    tag: ['docker', 'tex', 'github actions'],
    body: texEnvironment,
  },
  {
    id: '5',
    title: 'サポーターズの1on1イベントに参加してきたぞ！',
    date: '2021/05/16',
    tag: ['intern', 'event'],
    body: supporters1on1,
  },
  {
    id: '6',
    title: 'ドメイン買っちゃった笑',
    date: '2021/06/19',
    tag: ['random'],
    body: gotDomain,
  },
  {
    id: '7',
    title: '1dayインターンでディスカッションしてリフレッシュしてきた',
    date: '2021/08/05',
    tag: ['intern', 'business'],
    body: JSAT1day,
  },
];
