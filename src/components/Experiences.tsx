import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    aboutTitle: {
        textAlign: 'center',
    },
}));

interface WorkData {
    key: string;
    role: string;
    period: string;
}
const Experiences: React.FC = () => {
    const data: WorkData[] = [
        {
            key: '株式会社スマイル',
            role: 'Frontend Enginner',
            period: 'October/2018 ~ Aplil/2019',
        },
        {
            key: 'Chatwork',
            role: 'Engineer internship',
            period: 'Mid August/2019 ~ Early September/2019',
        },
        {
            key: '株式会社SUS',
            role: 'Unity Enginner',
            period: 'February/2020 ~ May/2020',
        },
    ];
    const table_contents = data.map((item) => (
        <tr>
            <th>{item.key}</th>
            <td>{item.role}</td>
            <td>{item.period}</td>
        </tr>
    ));

    return (
        <div id="experience" className="content-wrapper">
            <h2 className="title">Experiences</h2>
            <table className="table-wrapper">{table_contents}</table>
        </div>
    );
};

export default Experiences;
