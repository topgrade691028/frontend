import React from 'react';
import Navbar from './GroupsNavbar.jsx';
import GroupsList from './GroupsList.jsx';

export default class GroupsPage extends React.Component {
    render(){
        return (
            <div>
                <Navbar />

                <GroupsList groups={this.props.user===null?[]:this.props.user['groups_member']}/>
            </div>
        )
    }
}
