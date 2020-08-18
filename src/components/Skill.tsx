import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './styles/Skill.scss';

class Skill extends React.Component {
    render() {
        let table_content = [];
        let data = [
            { key: 'html/css(scss)' },
            { key: 'JavaScript/React' },
            { key: 'C/C++' },
            { key: 'Python' },
            { key: 'Rust' },
            { key: 'Unity' },
            { key: 'bash/zsh' },
            { key: 'vim' },
            { key: 'TOEIC: 870' },
        ];

        for (var i in data) {
            table_content.push(
                <tr>
                    <li>{data[i].key}</li>
                </tr>,
            );
        }

        return (
            <div id="skill" class="skill-wrapper">
                <h2 class="skill-title">Skill/Qualification</h2>
                <div className="box-wrapper">
                    <table className="skill-content">{table_content}</table>
                </div>
            </div>
        );
    }
}

export default Skill;
