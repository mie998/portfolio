import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useCommonStyles } from './styles/commonStyle';
import { Box, Grid, Card } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';

interface Content {
  key: string;
  description: string;
}

const useStyles = makeStyles(() => ({
  cardContainer: {
    alignItems: 'center',
    display: 'grid',
    gridAutoRows: 'auto',
    gridColumnGap: '2rem',
    gridRowGap: '1rem',
    gridTemplateColumns: 'repeat(auto-fit,10rem)',
    justifyContent: 'center',
    textAlign: 'center',
    width: '80%',
    margin: '0 auto',
  },
  cardStyle: {
    lineHeight: '1.5rem',
    borderRadius: '0.3rem',
    cursor: 'help',
  },
}));

const SkillCardTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.7)',
    maxWidth: 250,
    fontSize: '1rem',
    border: '1px solid #dadde9',
  },
}))(Tooltip);

const Skill: React.FC = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  const data: Content[] = [
    {
      key: 'React',
      description:
        'WEBフロントでずっと使用しております。個人開発にバイトに大活躍です。めちゃめちゃ好き。',
    },
    {
      key: 'C++',
      description:
        '競技プログラミングやROS等に主に使っています。最初にしっかりと学んだ言語なのでいまだに親だと思ってます。',
    },
    {
      key: 'Python',
      description:
        'なんでも python にやらせています。WEB から ROS から競技プログラミングにも。使いやすさだけならナンバーワンだと思います。',
    },
    {
      key: 'JS/TS',
      description:
        'JS も TS もいけます。型パズルとかも結構好きです。React書くなら TypeScript 派です。',
    },
    {
      key: 'Rust',
      description:
        'まれに触ってます。Rustで大規模開発とかはしたことないのでめちゃめちゃ興味アリです。',
    },
    {
      key: 'Unity(C#)',
      description:
        'Unity 好きです。ゲームを作ります。過去には3Dモデルを Unity 上でこねくり回したりしていました。C#もちょっとできます。',
    },
    {
      key: 'ROS',
      description:
        'ロボットの研究をしているのでROSが得意です。ROS1しか使ってないのでROS2はわかりません。',
    },
    {
      key: 'Docker',
      description:
        '基本的なことはわかります。個人レベルでも環境を汚したくないときは大体Dockerを使ってます。',
    },
    {
      key: 'atcoder(1078)',
      description:
        '数字は highest です。プログラミング始めたての頃はかなりはまっていましたが最近はできていません。水色までもう少しだったので踏ん張りたいです。',
    },
    {
      key: 'zsh',
      description:
        'zsh派です。実は結構 fish も気になっていますがまだ zsh 使ってます。starship がおすすめ。',
    },
    {
      key: 'vim',
      description:
        'vim が好きです。純粋な vim というより jetbrainsIDE や VScode の vim 拡張でカスタマイズして使ってます。わかりやすく最強。',
    },
    {
      key: 'TOEIC 870',
      description: '英語も好きですがもう少しスコア取りたいです。',
    },
    {
      key: '応用情報技術者',
      description:
        '大学4年くらいの時に取りました。ネットワークスペシャリストも気になっています。',
    },
  ];

  const table_contents: JSX.Element[] = data.map((item) => (
    <Grid item xl key={item.key}>
      <SkillCardTooltip title={item.description}>
        <Card className={classes.cardStyle}>
          <h5>{item.key}</h5>
        </Card>
      </SkillCardTooltip>
    </Grid>
  ));

  return (
    <Box id="skill" className={commonClasses.contentWrapper}>
      <h2 className={commonClasses.title}>Skill</h2>
      <div className={classes.cardContainer}>{table_contents}</div>
    </Box>
  );
};

export default Skill;
