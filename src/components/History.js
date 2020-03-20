import React from 'react'
import './styles/History.scss'

class History extends React.Component {
    render() {
        let table_content = [];
        let data = [
            {key: '株式会社スマイル', role: 'Frontend Enginner', period: 'October/2018 ~ Aplil/2019'},
            {key: 'Chatwork', role: 'Engineer internship', period: 'Mid August/2019 ~ Early September/2019'},
            {key: '株式会社SUS', role: '', period: 'February/2020~'}
        ];

        for (var i in data) {
            table_content.push(
                <tr>
                    <th>{data[i].key}</th>
                    <td>{data[i].role}</td>
                    <td>{data[i].period}</td>
                </tr>
            );
        }

        return (
            <div id="history" class="history-wrapper">
                <h2 class="history-title">History</h2>
                <div className="box-wrapper">
                    <table className="history-content">
                        {table_content}
                    </table>
                </div>
            </div>
        );
    }
}

export default History;
