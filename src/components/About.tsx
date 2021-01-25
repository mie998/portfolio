import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import polyImg from './images/polygon2.jpg';
import { smartPhoneMaxSize } from './common/settings';
import { useWindowDimensions } from './common/UsefulHooks';

const useStyles = makeStyles(() => ({
  contact: {
    fontSize: '1.5rem',
  },
  hovers: {
    color: 'white',
    '&:hover': {
      color: 'rgba(255, 255, 255, .3)',
    },
  },
  imgs: {
    width: '70%',
    border: '1px solid black',
    borderRadius: '1rem',
  },
  gridContainer: {
    maxWidth: '100%',
  },
}));

interface Content {
  key: string;
  value: string;
  url: string;
}

const About: React.FC = () => {
  const classes = useStyles();
  const data: Content[] = [
    { key: 'Name', value: 'Keisuke Nishiwaki', url: '' },
    {
      key: 'University',
      value: '京都大学情報学科',
      url: '',
    },
    { key: 'GitHub', value: 'mie998', url: 'https://github.com/mie998' },
    {
      key: 'Twitter',
      value: 'MIE98838',
      url: 'https://twitter.com/Mie98838',
    },
    { key: 'Contact', value: 'nishiwaki.kyoto[at]gmail.com', url: '' },
  ];

  // const table_contents = data.map((item) => (
  //     <tr>
  //         <th>{item.key}</th>
  //         <td>
  //             <a href={item.url} className={classes.hovers}>
  //                 {item.value}
  //             </a>
  //         </td>
  //     </tr>
  // ));

  const { width, _ } = useWindowDimensions();
  return (
    <div id="about" className="content-wrapper">
      <h2 className="title">About</h2>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
        className={classes.gridContainer}
      >
        {width > smartPhoneMaxSize ? (
          <Grid xs={3} item>
            <img src={polyImg} className={classes.imgs} />
          </Grid>
        ) : (
          <></>
        )}
        <Grid xs={width > 670 ? 5 : 8} item>
          <p>
            京都大学情報学科現4回生。ゲームは古来からの趣味であり、嵌まり込みすぎて情報学科に入学。現在は京都大学の神田研究室にて
            Human Robot Interaction に関する研究を行なっている。
          </p>
          <p>
            ゲーム開発やWEB開発,ロボットプログラミングなどさまざまな分野に対して広く興味を持っている。
          </p>
          <p className={classes.contact}>
            連絡先: nishiwaki.kyoto[at]gmail.com
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
