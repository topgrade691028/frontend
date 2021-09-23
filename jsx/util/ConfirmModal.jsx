import React from 'react';
import Modal from 'react-bootstrap/Modal.js';
import RoundedSpinner from './../util/RoundedSpinner.jsx';

export default class ConfirmModal extends React.Component {
    render() {
        return (
            <Modal {...this.props} size="md" aria-labelledby="queue-all-notice-modal-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="queue-all-notice-modal-vcenter">
                        {this.props.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.sendingrequest ?
                        <div className={"mx-auto text-center text-primary"}><RoundedSpinner/></div> :
                        <ul className="col justify-content-center">
                            <li className={"text-center my-4"} style={{listStyle: 'none'}}><p
                                className={""}>{this.props.message}</p></li>
                            <li className={"text-center my-4"} style={{listStyle: 'none'}}>
                                <button className="btn btn-primary col-4 mx-1" onClick={this.props.accept}>Да</button>
                                <button className="btn btn-secondary col-4 mx-1" onClick={this.props.decline}>Отмена
                                </button>
                            </li>
                        </ul>}
                </Modal.Body>
            </Modal>
        )
    }
}

