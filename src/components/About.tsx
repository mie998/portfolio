import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './styles/About.scss';

const useStyles = makeStyles((theme) => ({
    aboutTitle: {
        textAlign: 'center',
    },
}));

interface Content {
    key: string;
    value: string;
    url: string;
}
export default function About() {
    let table_content: any[] = [];
    let data: Content[] = [
        { key: 'Name', value: 'Keisuke Nishiwaki', url: '' },
        {
            key: 'University',
            value:
                'Informatics and Mathematical science faculty in Kyoto University',
            url: '',
        },
        { key: 'GitHub', value: 'mie998', url: 'https://github.com/mie998' },
        {
            key: 'Twitter',
            value: '@MIE98838',
            url: 'https://twitter.com/Mie98838',
        },
        { key: 'Contact', value: 'nishiwaki.kyoto[at]gmail.com', url: '' },
    ];

    const setUrl: any = (value, url) => {
        if (url !== '') {
            return (
                <td>
                    <a href={url}>{value}</a>
                </td>
            );
        } else {
            return <td>{value}</td>;
        }
    };
    for (let i in data) {
        table_content.push(
            <tr>
                <th>{data[i].key}</th>
                {setUrl(data[i].value, data[i].url)}
            </tr>,
        );
    }

    return (
        <div id="about" className="about-wrapper">
            <h2 className="about-title">About</h2>
            <div className="box-wrapper">
                <table className="about-content">{table_content}</table>
            </div>
        </div>
    );
}
