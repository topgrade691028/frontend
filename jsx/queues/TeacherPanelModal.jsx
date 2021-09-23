import React from 'react';
import Modal from 'react-bootstrap/Modal.js';
import Button from 'react-bootstrap/Button.js';
import Form from 'react-bootstrap/Form.js';
import Spinner from './../util/RoundedSpinner.jsx';
import Card from 'react-bootstrap/Card.js';
import Comment from './QueueNotification.jsx';
import TimeUtil from './../util/TimeUtil.js';


export default class TeacherPanelModal extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            commentInputFocused : false,
            isCommentaryPrivate: false,
            commentaryInput: "",
            textUnderInput: "Комментарий может быть публичным или приватным",
            comments : []
        };

        this.addCommentary = this.addCommentary.bind(this);
        this.commentaryInputHandler = this.commentaryInputHandler.bind(this);
        this.fetchComments = this.fetchComments.bind(this);
    }

    componentWillReceiveProps(newProps){
        this.fetchComments(newProps);
    }

    fetchComments(props){

        if (props.currentUsers !== null && props.currentUsers.length > 0)
        fetch(`/api/commentaries?username=${props.currentUsers[0]['username']}`)
            .then(resp => {
                if (resp.status === 200){
                    return resp.json();
                } else {
                    alert(resp.status)
                }
            })
            .then(comments => this.setState({comments: comments.reverse()}))
    }

    addCommentary(){
        console.log("message: " + this.state.commentaryInput + " " + this.state.isCommentaryPrivate);
        fetch(`/api/commentaries?username=${this.props.currentUsers[0]['username']}&text=${this.state.commentaryInput}&type=${this.state.isCommentaryPrivate?"private":"public"}`, {method: 'put'})
            .then(resp => {
                    if (resp.status === 200){
                        this.setState({
                            commentInputFocused : false,
                            isCommentaryPrivate: false,
                            commentaryInput: "",
                            textUnderInput: "Комментарий может быть публичным или приватным"
                        });

                        this.fetchComments(this.props);

                    } else {
                        return resp.json();
                    }
            })
            .then(resp => {
                this.setState({textUnderInput: resp['error_description']})
            })
            .catch(e => console.log(e))
    }


    commentaryInputHandler(event){
        this.setState({commentaryInput: event.target.value})
    }


    render() {
        return (
            <div>

                <Modal {...this.props} size="lg" aria-labelledby="queue-all-notice-modal-vcenter" centered>
                    {this.props.teacher !== null ? <div>

                            <Modal.Header >
                                <Modal.Title id="queue-all-notice-modal-vcenter">
                                    Панель преподавателя
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h4><span
                                    className={"text-secondary"}>Принимающий:</span> {this.props.teacher['user']['last_name']}
                                </h4>

                                <hr/>
                                {this.props.currentUsers === null ? <div>Не осталось свободных студентов</div> :
                                    <Card border="success" className="text-center">
                                        <Card.Header className={"text-white bg-success font-weight-bold"}>
                                            Сейчас на очереди
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Title>{this.props.currentUsers[0]['fullname']}</Card.Title>
                                            <Card.Text className={"font-weight-bold"}>
                                                Здесь должен быть номер лабораторной работы
                                            </Card.Text>
                                            <div className={"d-flex flex-row"}>
                                                <Button variant="secondary" className={"mx-1 ml-auto"}
                                                        onClick={this.props.onNextUser}>Пропустить</Button>
                                                <Button variant="success" className={"mx-1 mr-auto"}
                                                        onClick={this.props.onNextUser}>Принято</Button>
                                            </div>
                                            <div className={"d-flex flex-row mt-3"}>
                                                <Form className={"mx-auto" + " " + (this.state.commentInputFocused?"w-100":"w-sm-100 w-md-50")}

                                                      onFocus={() => this.setState({commentInputFocused: true})}
                                                >


                                                    <Form.Group controlId="formBasicInput">
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Комментарий"
                                                            as="textarea"
                                                            onInput={this.commentaryInputHandler}
                                                            value={this.state.commentaryInput}
                                                            style={{height: '40px'}}
                                                        />
                                                        <Form.Text className="text-muted">
                                                            {this.state.textUnderInput}
                                                        </Form.Text>
                                                    </Form.Group>

                                                    { this.state.commentInputFocused && <Form.Group controlId="formBasicCheckbox" className={"d-flex flex-row float-right"}>
                                                        <Form.Check
                                                            type="checkbox"
                                                            label="Приватный"
                                                            onChange = {(evt)=> this.setState({isCommentaryPrivate: evt.target.checked})}
                                                        />
                                                        <Button
                                                            variant={"primary"}
                                                            className={"mx-2"}
                                                            size={"sm"}
                                                            onClick={this.addCommentary}
                                                        >
                                                            Добавить
                                                        </Button>
                                                    </Form.Group>}

                                                </Form>


                                            </div>

                                            <ul>
                                                {this.state.comments.map((x, i) => <li key={i} style={{listStyle: 'none'}}>
                                                    <Comment
                                                        author={x['author']['first_name'] + " " + x['author']['last_name']}
                                                        message={x['text']}
                                                        time={TimeUtil.getFormattedTime(x['creation_date'])}
                                                    />
                                                </li>)}
                                            </ul>

                                        </Card.Body>
                                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                                    </Card>}

                                {this.props.nextUser !== null && <Card className="text-center mx-auto mt-3 w-75">
                                    <Card.Header>Следующий</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{this.props.nextUser['fullname']}</Card.Title>
                                        <Card.Text className={"font-weight-bold"}>
                                            Номер лабораторной работы
                                        </Card.Text>

                                    </Card.Body>
                                    <Card.Footer className="text-muted">16 days ago</Card.Footer>
                                </Card>}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.props.onHide} className={"btn-primary"}>Закрыть</Button>
                            </Modal.Footer>
                        </div>
                        :

                        <Spinner/>
                    }
                    </Modal>

            </div>
        )
    }
}