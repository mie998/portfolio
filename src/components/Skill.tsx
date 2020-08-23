import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './styles/Skill.scss';

interface Content {
    key: string;
}
const Skill: React.FC = () => {
    const data: Content[] = [
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

    const table_contents = data.map((item) => (
        <tr>
            <li>{item.key}</li>
        </tr>
    ));

    return (
        <div id="skill" className="content-wrapper">
            <h2 className="title">Skill</h2>
            <table className="table-wrapper">{table_contents}</table>
        </div>
    );
};

export default Skill;
