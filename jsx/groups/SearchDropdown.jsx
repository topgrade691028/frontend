import React from 'react';

export default class SearchDropdown extends React.Component {
    render() {
        return (
            <div className="card w-100 position-absolute bg-light" style={{zIndex: 500}}>

                <a href="#" style={{textDecoration: 'none'}}>
                    <div className="py-2 d-flex justify-content-between px-1">
                                            <span>
                                                Item-1
                                            </span>
                        <span>
                                                11/50
                                            </span>
                    </div>
                </a>
                <a href="#" style={{textDecoration: 'none'}}>
                    <div className="py-2 bg-primary text-white d-flex justify-content-between px-1">
                                            <span>
                                                Item-2
                                            </span>
                        <span>
                                                34/50
                                            </span>
                    </div>
                </a>
                <a href="#" style={{textDecoration: 'none'}}>
                    <div className="py-2 d-flex justify-content-between px-1">
                                            <span>
                                                Item-3
                                            </span>
                        <span>

                                            </span>
                    </div>
                </a>
                <a href="#" style={{textDecoration: 'none'}}>
                    <div className="py-2 d-flex justify-content-between px-1">
                                            <span>
                                                Very very very very lone group name here T
                                            </span>
                        <span>
                                                10/50
                                            </span>
                    </div>
                </a>
                <a href="#" style={{textDecoration: 'none'}}>
                    <div className="py-2 d-flex justify-content-between px-1">
                                            <span>
                                                Private group <i className={"fa fa-lock text-secondary"}></i>
                                            </span>
                        <span>
                                                6/50
                                            </span>
                    </div>
                </a>

            </div>
        )
    }
}