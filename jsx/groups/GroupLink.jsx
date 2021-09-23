import React from 'react';

export default class GroupLink extends React.Component {
    render() {
        return (
            <div className="media text-muted pt-3">
                <span className={"mr-2"}><svg className="bd-placeholder-img mr-2 rounded" width="32" height="32"
                                              xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"
                                              focusable="false" role="img"
                                              aria-label="Placeholder: 32x32"><title>Placeholder</title><rect
                    width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff"
                                                                     dy=".3em">32x32</text></svg>
                </span>
                <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                    <div className="d-flex justify-content-between align-items-center w-100">
                        <strong className="text-gray-dark">{this.props.fullname}</strong>
                        <div className="dropdown show dropleft">
                            <span role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                  aria-expanded="false">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                        </span>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">

                                <a className="dropdown-item" href={"#/group/123"}>
                                    Перейти
                                </a>

                                <button className="dropdown-item"
                                        onClick={() => this.setState({showSwapConfirm: true})}>
                                    Выйти
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={"d-flex justify-content-between mr-md-4"}>
                        <a href={"#/group/" + this.props.link}><span className="d-block">/{this.props.link}</span></a>
                        <span>Количество участников: 12</span>
                    </div>

                </div>

            </div>
        )
    }
}