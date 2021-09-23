import React from 'react';
// const QueuePageContent = require('./QueuePageContent.jsx');
import QueuePageContent from './QueuePageContent.jsx';

export default class QueuePage extends React.Component {

    render() {
        return <QueuePageContent queueName={this.props.match.params.id} user={this.props.user} updateUser={this.props.updateUser}/>
    }
}

