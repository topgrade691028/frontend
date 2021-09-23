import React from 'react';
import Content from './UserProfileSettingsPageContent.jsx';

export default class UserProfileSettingsPage extends React.Component {
    render() {
        return <Content user={this.props.user}/>
    }
}
