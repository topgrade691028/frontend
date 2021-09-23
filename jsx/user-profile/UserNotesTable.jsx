import React from 'react';
import TableElement from './TableElement.jsx';
import Table from 'react-bootstrap/Table.js';

export default class UserNotesTable extends React.Component {
    render() {
        return (
            <Table bordered>
                <thead>
                <tr>
                    <th colSpan={"5"}>[Preview] Комментарии преподавателей</th>
                </tr>
                <tr>

                    <th>Преподаватель</th>
                    <th colSpan={"2"}>Комментарий</th>
                    <th>Дисциплина</th>
                    <th>Дата</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Николаев В.В</td>
                    <td>Некорректный UI</td>
                    <td className={"text-center"}>
                        <button className={"btn btn-link col-1 text-primary"}><i className={"fa fa-file-alt"}></i>
                        </button>
                    </td>
                    <td>Программирование</td>
                    <td>02.09.2019</td>
                </tr>

                <tr>
                    <td>Гаврилов А.В</td>
                    <td>Promise в JS</td>
                    <td className={"text-center"}>
                        <button className={"btn btn-link col-1 text-primary"}><i className={"fa fa-file-alt"}></i>
                        </button>
                    </td>
                    <td>Программирование Веб-приложений</td>
                    <td>01.09.2019</td>
                </tr>
                <tr>
                    <td>Николаев В.В</td>
                    <td>Многопоточность</td>
                    <td className={"text-center"}>
                        <button className={"btn btn-link col-1 text-primary"}><i className={"fa fa-file-alt"}></i>
                        </button>
                    </td>
                    <td>Программирование</td>
                    <td>19.09.2019</td>
                </tr>
                </tbody>
            </Table>
        )
    }
}