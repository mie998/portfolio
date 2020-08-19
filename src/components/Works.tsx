import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './styles/Works.scss';

interface Contents {
    key: string;
    url: String;
    description: string;
}
const Works: React.FC = () => {
    let table_content = [];
    let data = [
        {
            key: 'portfolio',
            url: 'https://mie998.github.io/portfolio/',
            description:
                '自身のポートフォリオサイトを作成しました. React でフロントエンドを処理し, Github Pages にてホスティングしています。',
        },
        { key: '', url: '', description: '' },
    ];

    for (var i in data) {
        table_content.push(
            <>
                <h3>
                    <a href={data[i].url}>{data[i].key}</a>
                </h3>
                <p>{data[i].description}</p>
            </>,
        );
    }

    return (
        <div id="works" className="work-wrapper">
            <h2 className="work-title">Works</h2>
            <div className="box-wrapper">
                <table className="work-content">{table_content}</table>
            </div>
        </div>
    );
};

export default Works;
