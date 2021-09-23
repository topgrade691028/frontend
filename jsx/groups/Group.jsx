import React from 'react';

export default class Group extends React.Component {

    constructor(props){
        super(props);


        this.onSettingsClick = this.onSettingsClick.bind(this);
    }

    onSettingsClick(){

    }

    render(){
        return (
            <main role="main" className="container">
                <div className="d-flex align-items-center p-3 my-3 bg-purple rounded shadow-sm" data-aos='slide-up'>
                    <i className="fa fa-users fa-2x" aria-hidden="true"></i>
                    <div className="lh-100">
                        <h6 className="ml-3 mb-0 text-black lh-100">{"Group Name"}</h6>
                    </div>
                    <button className={"btn btn-link text-right float-right ml-auto"} style={{textDecoration: 'none'}}
                            onClick={this.onSettingsClick}><span className={"d-none d-md-inline"}>Управление </span><i
                        className="fa fa-cog"></i></button>
                </div>

                <div className="my-3 p-3 bg-white rounded shadow-sm" data-aos-duration='800' data-aos='slide-up'>
                    <h6 className="border-bottom border-gray pb-2 mb-0">Последние обновления</h6>

                    <small className="d-block text-right mt-3">
                        <a onClick={() => this.setState({showAllNotifications: true})} style={{cursor: 'pointer'}}>
                            Все обновления
                        </a>
                    </small>
                </div>

                <div className="my-3 p-3 bg-white rounded shadow-sm" data-aos='fade-up' data-aos-duration='900'>
                    <div className={"border-bottom justify-content-between d-flex flex-column flex-md-row mr-md-2"}>
                        <div>
                            <div className={"text-secondary"}>
                                Количество участников: 4
                            </div>
                            <h6 className=" border-gray pb-2 mb-0">
                                Участники группы
                            </h6>
                        </div>

                    </div>



                    <ul className={"pl-0"}>
                        <li><Group username={"test-1"} fullname={"test"} imgUrl={"https://i.pinimg.com/564x/10/48/bb/1048bb24cfd89080238940e977c2936d.jpg"}/></li>
                        <li><Group username={"test-2"} fullname={"test"} imgUrl={"https://i.pinimg.com/564x/10/48/bb/1048bb24cfd89080238940e977c2936d.jpg"}/></li>
                        <li><Group username={"test-3"} fullname={"test"} imgUrl={"https://i.pinimg.com/564x/10/48/bb/1048bb24cfd89080238940e977c2936d.jpg"}/></li>
                        <li><Group username={"test-4"} fullname={"test"} imgUrl={"https://i.pinimg.com/564x/10/48/bb/1048bb24cfd89080238940e977c2936d.jpg"}/></li>
                    </ul>

                </div>

            </main>
        )
    }
}