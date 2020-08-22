import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './styles/Skill.scss';

const useStyles = makeStyles((theme) => ({
    aboutTitle: {
        textAlign: 'center',
    },
}));
const Skill: React.FC = () => {
    let table_content = [];
    let data = [
        { key: 'html/css(scss)' },
        { key: 'JS/TS/React' },
        { key: 'C++' },
        { key: 'Python' },
        { key: 'Rust' },
        { key: 'Unity(C#)' },
        { key: 'bash/zsh' },
        { key: 'vim' },
        { key: 'TOEIC 870' },
    ];

    for (var i in data) {
        table_content.push(
            <tr>
                <li>{data[i].key}</li>
            </tr>,
        );
    }

    return (
        <div id="skill" className="content-wrapper">
            <h2 className="title">Skill/Qualification</h2>
            <table className="table-wrapper">{table_content}</table>
        </div>
    );
};

export default Skill;
