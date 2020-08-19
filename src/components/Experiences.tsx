import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
    let table_content: any[] = [];
    let data: WorkData[] = [
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
        { key: '株式会社SUS', role: '', period: 'February/2020~' },
    ];
    for (var i in data) {
        table_content.push(
            <tr>
                <th>{data[i].key}</th>
                <td>{data[i].role}</td>
                <td>{data[i].period}</td>
            </tr>,
        );
    }

    return (
        <div id="history" className="history-wrapper">
            <h2 className="history-title">Experiences</h2>
            <div className="box-wrapper">
                <table className="history-content">{table_content}</table>
            </div>
        </div>
    );
};

export default Experiences;
