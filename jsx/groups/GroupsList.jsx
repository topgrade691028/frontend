import React from 'react';
import Group from './GroupLink.jsx';

export default class GroupsList extends React.Component {

    constructor(props){
        super(props);


        this.onSettingsClick = this.onSettingsClick.bind(this);
    }

    onSettingsClick(){

    }

    render(){
        return (
            <main role="main" className="container">
                 <div className="my-3 p-3 bg-white rounded shadow-sm" data-aos='fade-up' data-aos-duration='900'>
                    <div className={"border-bottom justify-content-between d-flex flex-column flex-md-row mr-md-2"}>
                        <div>
                            <h6 className=" border-gray pb-2 mb-0">
                                Групп : {this.props.groups.length}
                            </h6>
                        </div>

                    </div>

                    <ul className={"pl-0"}>
                        {this.props.groups.map((x, i) => <li key={i} style={{listStyle: 'none'}}><Group link={x['group_name']} fullname={x['group_fullname']} imgUrl={"https://i.pinimg.com/564x/10/48/bb/1048bb24cfd89080238940e977c2936d.jpg"}/></li>)}
                    </ul>

                </div>

            </main>
        )
    }
}