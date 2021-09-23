import React from 'react';

export default class ProfileNavbar extends React.Component {


    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#/myprofile">Мой профиль</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fa fa-ellipsis-h"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mr-3">

                        {/*You can toggle active .class*/}

                        <li className="nav-item">
                            <a className="nav-link" href="#/myprofile">Очереди </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/myprofile/commentaries">Комментарии преподавателей</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#/profile-settings">Настройки</a>
                        </li>
                    </ul>

                </div>
            </nav>
        )
    }

}
