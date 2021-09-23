import React from 'react';
import QueueLink from './queues/QueueLink.jsx';
import Spinner from './util/RoundedSpinner.jsx';
import logo from './../style/sidebar/helios-white-logo.png';

import './../style/sidebar/style.css';


export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "queues": [],
            "queuesEmpty": true,
            "loading": true, "username": "",
            "logged": false,
            favorites: [],
            favoritesEmpty: true
        };

        this.fetchQueues = this.fetchQueues.bind(this);
    }

    componentDidMount() {

        this.setState({loading: true});
        fetch('api/user')

            .then(response => {
                if (response.status === 400 || response.status === 401) {
                    document.location.href = "/api/auth";
                }
                return response.json()
            }).then(
            resp => {
                let queues = resp['queues'];
                queues.sort(function (a, b) {
                    return a[0] === b[0] ? a > b : a[0] > b[0]
                });
                let fullname = resp['user']['first_name'] + " " + resp['user']['last_name'];
                this.setState({
                    "queues": queues,
                    queuesEmpty: queues.length === 0,
                    "loading": false,
                    "username": fullname,
                    "logged": true
                })
            })
            .catch(err => console.log(err));


    }

    fetchQueues() {
        fetch('api/user')
            .then(response => {
                if (response.status === 400 || response.status === 401) {
                    document.location.href = "/api/auth";
                }
                return response.json()
            })
            .then(resp => {
                let queues = resp['queues'];
                queues.sort(function (a, b) {
                    return a[0] === b[0] ? a > b : a[0] > b[0]
                });

                this.setState(
                    {
                        queues: queues,
                        queuesEmpty: queues.length === 0
                    });

                fetch('api/favorite')
                    .then(resp => resp.json())
                    .then(resp => this.setState({favorites: resp, favoritesEmpty: resp.length === 0, loading: false }))

            })


    }

    render() {
        return (
            <div className="wrapper">

                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3 className="text-center">
                            <img src={logo} className="img-fluid col-6" data-aos="flip-right"/>
                        </h3>
                    </div>

                    <ul className="list-unstyled components">

                        <li><a href={"#/myprofile"} className={"sidebar-link"}>Мой профиль</a></li>
                        <li>
                            <a href={"#queues"} data-toggle="collapse" aria-expanded="false"
                               onClick={this.fetchQueues}>Мои очереди</a>
                            <ul className="collapse list-unstyled sidebar-link" id="queues">
                                {this.state.loading ? (
                                        <li className="justify-content-center mx-auto text-center"><Spinner/></li>)
                                    :
                                    this.state.queuesEmpty ?
                                        <li className="justify-content-center mx-auto text-center">Пусто</li> : this.state.queues.map((i, k) => {
                                            return <li key={k}><QueueLink link={"#/queue/" + i["short_name"]}
                                                                          name={i["fullname"]}/></li>
                                        })
                                }
                            </ul>
                        </li>
                        <li>
                            <a href={"#favorite"} data-toggle="collapse" aria-expanded="false"
                               onClick={this.fetchQueues}>Закладки</a>
                            <ul className="collapse list-unstyled sidebar-link" id="favorite">
                                {this.state.loading ? (
                                        <li className="justify-content-center mx-auto text-center"><Spinner/></li>)
                                    :
                                    this.state.favoritesEmpty ?
                                        <li className="justify-content-center mx-auto text-center">Пусто</li> : this.state.favorites.map((i, k) => {
                                            return <li key={k}><QueueLink link={"#/queue/" + i["queue_name"]}
                                                                          name={i["queue_fullname"]}/></li>
                                        })
                                }
                            </ul>
                        </li>
                        <li><a href={"#/search"} className={"sidebar-link"}>Найти</a></li>
                        <li><a href={"#/create"} className={"sidebar-link"}>Создать</a></li>
                        <li><a href={"#/mygroups"} className={"sidebar-link"}>Группы</a></li>
                        <hr/>
                        <li>{this.state.logged ?
                            <div className={"d-flex justify-content-between py-1"}>
                                <p className={"py-0 mb-0 mt-1"}>{this.state.username}</p>
                                <div className={"d-flex"}>
                                    <a href="#/profile-settings"><i className={"fa fa-cog sidebar-link"}></i></a>
                                    <a href="/api/logout"><i className={"fa fa-sign-out-alt"}></i></a>
                                </div>
                            </div> :
                            <a href={"/api/auth"} className={"sidebar-link"}>Войти</a>
                        }
                        </li>
                    </ul>
                </nav>

                <div id="content">
                    <button type="button" id="sidebarCollapse" className="navbar-btn bg-transparent">
                        <span/>
                        <span/>
                        <span/>
                    </button>
                    {this.props.content}
                </div>
            </div>
        )


    }
}