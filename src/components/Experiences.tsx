import React from 'react';
import { makeStyles } from '@material-ui/core';

interface WorkData {
  key: string;
  role: string;
  period: string;
  date: string;
}

const useStyles = makeStyles(() => ({
  contents: {
    textAlign: 'center',
  },
}));

const Experiences: React.FC = () => {
  const classes = useStyles();
  const data: WorkData[] = [
    {
      key: '株式会社スマイル',
      role: 'Frontend Enginner',
      period: 'October/2018 ~ Aplil/2019',
      date: '20181001',
    },
    {
      key: 'Chatwork株式会社',
      role: 'Engineer internship',
      period: 'Mid August/2019 ~ Early September/2019',
      date: '20190801',
    },
    {
      key: '株式会社SUS',
      role: 'Unity Enginner',
      period: 'February/2020 ~ May/2020',
      date: '20200201',
    },
    {
      key: '株式会社ロバリフ',
      role: 'Enginner',
      period: 'September/2020 ~',
      date: '20200901',
    },
  ];
  const sortedData = data.sort(
    (a: WorkData, b: WorkData) => parseInt(b.date) - parseInt(a.date),
  );
  const contents: JSX.Element[] = sortedData.map((item) => (
    <div className={classes.contents}>
      <p>{item.period}</p>
      <p>
        <b>{item.key}</b>: {item.role}
      </p>
      <br></br>
    </div>
  ));

  return (
    <div id="experience" className="content-wrapper">
      <h2 className="title">Experiences</h2>
      {contents}
    </div>
  );
};

export default Experiences;
