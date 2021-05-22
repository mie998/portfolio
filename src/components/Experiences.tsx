import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useCommonStyles } from './styles/commonStyle';
import { Box } from '@material-ui/core';

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
  const commonClasses = useCommonStyles();

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
      period: 'September/2020 ~ March/2021',
      date: '20200901',
    },
    {
      key: 'Datagrid Inc.',
      role: 'Enginner',
      period: 'September/2020 ~ March/2021',
      date: '20210301',
    },
  ];
  const sortedData = data.sort(
    (a: WorkData, b: WorkData) => parseInt(b.date) - parseInt(a.date),
  );

  const contents: JSX.Element[] = sortedData.map((item) => (
    <div className={classes.contents}>
      <p>{item.period}</p>
      <p>
        <b>{item.key}</b> as {item.role}
      </p>
      <br></br>
    </div>
  ));

  return (
    <Box id="experience" className={commonClasses.contentWrapper}>
      <h2 className={commonClasses.title}>Experiences</h2>
      {contents}
    </Box>
  );
};

export default Experiences;
