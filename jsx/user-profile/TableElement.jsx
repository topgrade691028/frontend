import React from 'react';

export default class TableElement extends React.Component {
    render() {
        return (
            <div>
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">Действие</th>
                        <th scope="col">Дата</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Записался в очередь</td>
                        <td>24.01.2018 18:29</td>
                    </tr>
                    <tr>
                        <td>Сдал 7-ю лабораторную работу</td>
                        <td>22.01.2018 12:40</td>
                    </tr>
                    <tr>
                        <td>Записался на очередь</td>
                        <td>22.01.2018 09:10</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
