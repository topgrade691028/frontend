import React from 'react';
import TableElement from './TableElement.jsx';
import Table from 'react-bootstrap/Table.js';

export default class UserDashboard extends React.Component {
    render() {
        return (
            <Table bordered>
                <thead>
                <tr>
                    <th colSpan={"6"}>{this.props.title}</th>
                </tr>
                <tr>

                    <th>Очередь</th>
                    <th>Пользователь</th>
                    <th className={"text-center"}>Статус</th>
                    <th>Места</th>
                    <th className={"text-center"}>Дата</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Queue numba 1</td>
                    <td>Arthur Kupriyanov <span className={"text-secondary"}>@apploidxxx</span></td>
                    <td className={"text-center"}><span className={"text-success"}>Принят</span></td>
                    <td className={"text-center"}>
                        <td><span>1</span></td>
                        <td><i className={"fa fa-exchange-alt text-success mx-1"}></i></td>
                        <td><span>5</span></td>
                    </td>
                    <td className={"text-center"}>02.09.2019</td>
                    <td className={"text-center"}>
                        <button className={"btn btn-link col-1 text-danger"}><i className={"fa fa-trash"}></i></button>
                    </td>
                </tr>
                <tr>
                    <td>P3212</td>
                    <td>Eniseev Artem <span className={"text-secondary"}>@kraken</span></td>
                    <td className={"text-center"}><span className={"text-danger"}>Отказан</span></td>
                    <td className={"text-center"}>
                        <td><span>4</span></td>
                        <td><i className={"fa fa-exchange-alt text-success mx-1"}></i></td>
                        <td><span>12</span></td>
                    </td>
                    <td className={"text-center"}>22.08.2019</td>
                    <td className={"text-center"}>
                        <button className={"btn btn-link col-1 text-danger"}><i className={"fa fa-trash"}></i></button>
                    </td>
                </tr>
                <tr>
                    <td>Доп к Николаеву</td>
                    <td>Иванов Евгений <span className={"text-secondary"}>@SHA-256</span></td>
                    <td className={"text-center"}><span className={"text-warning"}>Рассматривается</span></td>
                    <td className={"text-center"}>
                        <td><span>9</span></td>
                        <td><i className={"fa fa-exchange-alt text-success mx-1"}></i></td>
                        <td><span>14</span></td>
                    </td>
                    <td className={"text-center"}>01.08.2019</td>
                    <td className={"text-center"}>
                        <button className={"btn btn-link col-1 text-danger"}><i className={"fa fa-trash"}></i></button>
                    </td>
                </tr>
                </tbody>
            </Table>
        )
    }
}