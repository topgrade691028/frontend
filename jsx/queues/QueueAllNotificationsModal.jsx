import React from 'react';
import Modal from 'react-bootstrap/Modal.js';
import Button from 'react-bootstrap/Button.js';
import Media from './QueueNotification.jsx';

export default class QueueAllNotificationsModal extends React.Component {


    render() {
        return (
            <Modal {...this.props} size="lg" aria-labelledby="queue-all-notice-modal-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="queue-all-notice-modal-vcenter">
                        Все обновления
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.data.map((x, i) => <li style={{listStyle: 'none'}} key={i}>{x}</li>)}
                </Modal.Body>
                <Modal.Footer className={"justify-content-between"}>
                    <Button onClick={this.props.onClearNotifications} variant={"danger"}>Очистить оповещения</Button>
                    <Button onClick={this.props.onHide} className={"btn-primary"}>Закрыть</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

