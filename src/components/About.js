import React from 'react'
import './styles/About.scss'

class About extends React.Component {
    render() {
        let table_content = [];
        let data = [
            {key: 'Name', value: 'Keisuke Nishiwaki', url: ''},
            {key: 'University', value: 'Informatics and Mathematical science faculty in Kyoto University', url: ''},
            {key: 'GitHub', value: 'mie998', url: 'https://github.com/mie998'},
            {key: 'Twitter', value: '@MIE98838', url: 'https://twitter.com/Mie98838'},
            {key: 'Blog', value: 'みえログ！', url: 'https://blog.hatena.ne.jp/MIE999/mie999.hatenablog.com/'},
            {key: 'Contact', value: 'nishiwaki.kyoto[at]gmail.com', url: ''},
        ];

        const setUrl = function (value, url) {
            if (url !== '') {
                return (
                    <td><a href={url}>{value}</a></td>
                );
            } else {
                return (
                    <td>{value}</td>
                );
            }
        };
        for (let i in data) {
            table_content.push(
                <tr>
                    <th>{data[i].key}</th>
                    {setUrl(data[i].value, data[i].url)}
                </tr>
            );
        }

        return (
            <div id="about" className="about-wrapper">
                <h2 className="about-title">About</h2>
                <div className="box-wrapper">
                    <table className="about-content">
                        {table_content}
                    </table>
                </div>
            </div>
        );
    }
}

export default About;
