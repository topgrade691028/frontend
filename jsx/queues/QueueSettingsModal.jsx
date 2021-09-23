import React from 'react';
import Modal from 'react-bootstrap/Modal.js';
import Button from 'react-bootstrap/Button.js';
import ConfirmModal from './../util/ConfirmModal.jsx';
import QueueUser from "./QueueUser.jsx";

export default class QueueSettingsModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDeleteConfirm: false, deleteConfirmSendingRequest: false,
            deleteConfirmMessage: "Вы уверены, что хотите удалить очередь?",
            showShuffleModal: false, shuffleModalSendingRequest: false,
            shuffleModalMessage: "Вы уверены, что хотите перемешать очередь?"
        };
        this.onDeleteAccept = this.onDeleteAccept.bind(this);
        this.onShuffleClick = this.onShuffleClick.bind(this);
    }

    onShuffleClick() {
        this.setState({shuffleModalSendingRequest: true});

        fetch("api/queue/" + this.props.queueName + "?action=shuffle", {method: "put"})
            .then(resp => {
                if (resp.status === 200) {
                    this.setState({showShuffleModal: false, shuffleModalSendingRequest: false});
                    window.location.reload();
                } else if (resp.status === 403) {
                    this.setState({shuffleModalMessage: "У вас недостаточно прав", shuffleModalSendingRequest: false});
                    this.onShuffleClick = () => {
                        this.setState({showShuffleModal: false})
                    };    // TODO: maybe do this better ? :)
                } else {
                    console.log("fail: " + resp.status);
                    this.setState({
                        shuffleModalSendingRequest: false,
                        shuffleModalMessage: "Произошла ошибка. Повторите попытку позже"
                    });
                }
            }).catch(err => {
            console.log(err);
            this.setState({
                shuffleModalSendingRequest: false,
                shuffleModalMessage: "Произошла ошибка. Повторите попытку позже"
            });
        });
    }

    onDeleteAccept() {
        this.setState({deleteConfirmSendingRequest: true});
        fetch("api/queue?target=QUEUE&queue_name=" + this.props.queueName, {method: "delete"})
            .then(resp => {
                if (resp.status === 200) {
                    this.setState({showDeleteConfirm: false, deleteConfirmSendingRequest: false});
                    window.location.reload();
                    document.location.href = "/helios.html#/search"
                } else {
                    console.log("fail: " + resp.status);
                    this.setState({showDeleteConfirm: false, deleteConfirmSendingRequest: false});
                }
            }).catch(err => {
            console.log(err);
            this.setState({
                deleteConfirmSendingRequest: false,
                deleteConfirmMessage: "Произошла ошибка. Повторите попытку позже"
            });
        });
    }

    render() {
        return (
            <Modal {...this.props} size="lg" aria-labelledby="queue-all-notice-modal-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="queue-all-notice-modal-vcenter">
                        Панель управления
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className="col justify-content-center">
                        <li className={"text-center my-3"} style={{listStyle: 'none'}}>
                            <button className="btn btn-outline-primary col-8"
                                    onClick={() => this.setState({showShuffleModal: true})}>Перемешать
                            </button>
                        </li>
                        <li className={"text-center my-3"} style={{listStyle: 'none'}}>
                            <button className="btn btn-outline-primary col-8"
                                    onClick={() => alert("Функция еще не предусмотрена")}>Назначить администраторов
                            </button>
                        </li>
                        <li className={"text-center my-3"} style={{listStyle: 'none'}}>
                            <button className="btn btn-outline-danger col-8"
                                    onClick={() => this.setState({showDeleteConfirm: true})}>Удалить очередь
                            </button>
                        </li>
                        <hr/>
                        <div className={"justify-content-between d-flex flex-row"}><h3>Администраторы</h3> <button className={"btn btn-sm btn-secondary"}>Добавить</button></div>
                        {this.props.superUsers.map((x, i) => <li  style={{listStyle: 'none'}} key={i}>
                            <QueueUser
                                username={x["username"]}
                                fullname={x["first_name"] + " " + (x["last_name"] === null ? "" : x["last_name"])}
                                queuename={this.props.queueName}
                                onChange={() => this.fetchQueue(this.props)}
                                imgUrl={x["contact_details"]["img"] === null ? "https://i.pinimg.com/564x/10/48/bb/1048bb24cfd89080238940e977c2936d.jpg" : x["contact_details"]["img"]}
                                alreadyInQueue={false}
                                isCanManage={false}
                                onlyForList={true}
                            />
                        </li>)}
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide} className={"btn-primary"}>Закрыть</Button>
                </Modal.Footer>

                <ConfirmModal
                    sendingrequest={this.state.deleteConfirmSendingRequest ? 1 : 0}
                    show={this.state.showDeleteConfirm}
                    onHide={() => this.setState({showDeleteConfirm: false})}
                    message={this.state.deleteConfirmMessage}
                    accept={() => this.onDeleteAccept()} decline={() => this.setState({showDeleteConfirm: false})}/>

                <ConfirmModal
                    sendingrequest={this.state.shuffleModalSendingRequest ? 1 : 0}
                    show={this.state.showShuffleModal}
                    onHide={() => this.setState({showShuffleModal: false})}
                    message={this.state.shuffleModalMessage}
                    accept={this.onShuffleClick} decline={() => this.setState({showShuffleModal: false})}
                />
            </Modal>
        )
    }
}