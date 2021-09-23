import React from 'react';

import Modal from 'react-bootstrap/Modal.js';
import Button from 'react-bootstrap/Button.js';

import RoundedSpinner from './../util/RoundedSpinner.jsx';

export default class QueuePasswordModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {password: "", successful: true, sendingReq: false};
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onJoinButtonClick = this.onJoinButtonClick.bind(this);
    }

    onJoinButtonClick() {
        this.setState({sendingReq: true});
        fetch("api/queue?queue_name=" + this.props.shortName + "&password=" + this.state.password, {method: "put"})
            .then(resp => {
                if (resp.status === 200) {
                    this.setState({successful: true});
                    if (this.props.onSuccess !== undefined || this.props.onSuccess !==null){
                        this.props.onSuccess();
                    }
                } else if (resp.status === 403) {
                    this.setState({successful: false})
                }

                this.setState({sendingReq: false});
            })
            .catch(this.setState({sendingReq: false}))


    }

    onPasswordChange(e) {
        this.setState({password: e.target.value});
    }

    render() {
        return (
            <Modal {...this.props} size="md" aria-labelledby="password-modal-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="password-modal-vcenter">
                        {this.props.fullName}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.state.sendingReq ? <RoundedSpinner className={"mx-auto"}/> :
                        <div>
                            Введите пароль для входа в приватную очередь:<br/>
                            {this.state.successful ? "" : <p className={"text-danger"}>Неверный пароль</p>}
                            <form action="" className={"mx-auto justify-content-center text-center"}>
                                <input
                                    className={"mt-2 text-center rounded " + (this.state.successful ? "" : "border-danger")}
                                    type="password" id={"password-modal-input"} onChange={this.onPasswordChange}/>
                            </form>
                        </div>}

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.onJoinButtonClick}>Подтвердить</Button>
                    <Button onClick={this.props.onHide} className={"btn-secondary"}>Закрыть</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
