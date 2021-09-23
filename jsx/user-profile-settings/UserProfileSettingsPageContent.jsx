import React from 'react';
import Spinner from 'react-bootstrap/Spinner.js';
import UserCard from './../user-profile/UserCard.jsx';
import Form from 'react-bootstrap/Form.js';
import Button from 'react-bootstrap/Button.js';

export default class UserProfileSettingsPageContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchingUserInfo: true,
            username: "loading...",
            fullname: "loading...",
            errorOccurred: false,
            userImgUrl: "https://i.pinimg.com/564x/10/48/bb/1048bb24cfd89080238940e977c2936d.jpg",
            imgInput: "",
            nicknameInput: "",
            imgInputDescription: "Размер изображения должен быть меньше, чем 1000х1000",
            nicknameInputDescription: ""
        };

        this.changeImageButtonClicked = this.changeImageButtonClicked.bind(this);
        this.changeUsernameButtonClicked = this.changeUsernameButtonClicked.bind(this);
        this.handleImageInput = this.handleImageInput.bind(this);
        this.fetchUserInfo = this.fetchUserInfo.bind(this);

        this.handleNicknameInput = this.handleNicknameInput.bind(this);
    }

    componentDidMount() {
        if (this.props.user !== null)
        this.fetchUserInfo(this.props);
    }

    componentWillReceiveProps(newProps){
        if (newProps.user !== null)
        this.fetchUserInfo(newProps);
    }

    fetchUserInfo(props){
        if (props.user !== null)
            this.setState({
                fetchingUserInfo: false,
                username: props.user["user"]["username"],
                fullname: props.user["user"]["first_name"] + " " + props.user["user"]["last_name"],
                userImgUrl: (props.user["user"]["contact_details"]["img"] === null ? "https://i.pinimg.com/564x/10/48/bb/1048bb24cfd89080238940e977c2936d.jpg" : props.user["user"]["contact_details"]["img"]),
                swapRequests: props.user["swap_requests"]
            });
    }


    changeImageButtonClicked() {
        if (this.state.imgInput === "") return;
        fetch("api/settings/" + this.state.username + `?property=img&value=${this.state.imgInput}`, {method: 'put'})
            .then(resp => {
                if (resp.status === 200) {
                    window.location.reload();
                }

                return resp.json();
            })
            .then(errorData => this.setState({
                imgInputDescription: <span className={"text-danger"}>Ошибка: {errorData["error_description"]}</span>
            }));

    }

    changeUsernameButtonClicked() {
        if (this.state.nicknameInput === "") return;
        fetch("api/settings/" + this.state.username + `?property=username&value=${this.state.nicknameInput}`, {method: 'put'})
            .then(resp => {
                if (resp.status === 200) {
                    window.location.reload();
                }

                return resp.json();
            })
            .then(errorData => this.setState({
                nicknameInputDescription: <span className={"text-danger"}>Ошибка: {errorData["error_description"]}</span>
            }));
    }

    handleImageInput(event) {
        this.setState({imgInput: event.target.value});
    }

    handleNicknameInput(event){
        this.setState({nicknameInput: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="justify-content-between col-12 mx-auto">
                    <div className="col-12 col-md-10 mx-auto d-flex flex-column flex-md-row justify-content-around" data-aos={"fade-down"}>
                        {
                            this.state.fetchingUserInfo ? <Spinner animation="border" size={"lg"} style={{width: '3rem',height: '3rem', marginTop: '150px'}} className={"my-auto"}/> :
                                <UserCard
                                    username={this.state.username}
                                    fullname={this.state.fullname}
                                    userImgUrl={this.state.userImgUrl}
                                />
                        }
                        <div className={"settings"}>
                            <Form>
                                <Form.Group controlId="formBasicUrl">
                                    <Form.Label>Image URL</Form.Label>
                                    <Form.Control   type="url" placeholder="paste link here"
                                                    onChange={this.handleImageInput}
                                                    value={this.state.imgInput}/>
                                    <Form.Text className="text-muted">
                                        {this.state.imgInputDescription}
                                    </Form.Text>
                                    <button className={"btn btn-primary"} type="button"
                                            onClick={this.changeImageButtonClicked}>
                                        Сменить аватар
                                    </button>
                                </Form.Group>

                                <Form.Group controlId="formBasicText">
                                    <Form.Label>New nickname</Form.Label>
                                    <Form.Control   type="text" placeholder="Новый никнейм"
                                                    onChange={this.handleNicknameInput}
                                                    value={this.state.nicknameInput}
                                    />
                                </Form.Group>
                                <Form.Text className="text-muted">
                                    {this.state.nicknameInputDescription}
                                </Form.Text>
                                <Button variant="primary" type="button" onClick={this.changeUsernameButtonClicked}>
                                    Сменить никнейм
                                </Button>
                            </Form>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
