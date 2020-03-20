import React from 'react'
import './styles/Works.scss'

class Works extends React.Component {
    render() {
        let table_content = [];
        let data = [
            {
                key: 'portfolio',
                url: 'https://mie998.github.io/portfolio/',
                description: '2020年春に自身のポートフォリオサイトを作成しました. React でフロントエンドを処理し, Github Pages にてホスティングしています。'
            },
            {key: '', url: '', description: ''},
        ];

        for (var i in data) {
            table_content.push(
                <>
                    <h3><a href={data[i].url}>{data[i].key}</a></h3>
                    <p>{data[i].description}</p>
                </>
            );
        }

        return (
            <div id="works" class="work-wrapper">
                <h2 class="work-title">Works</h2>
                <div className="box-wrapper">
                    <table className="work-content">
                        {table_content}
                    </table>
                </div>
            </div>
        );
    }
}

export default Works;
