import React from 'react';
import RoundedSpinner from './../util/RoundedSpinner.jsx';
import PriorityPickModal from './PriorityPickModal.jsx';
require('./../../style/form/main.css');

export default class CreateQueuePage extends React.Component {

    render() {
        return <CreateQueuePageContent/>
    }

}

class CreateQueuePageContent extends React.Component {

    constructor(props) {
        super(props);
        this.handleNameInput = this.handleNameInput.bind(this);
        this.handleFullnameInput = this.handleFullnameInput.bind(this);
        this.sendRequest = this.sendRequest.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.privateCheckClick = this.privateCheckClick.bind(this);
        this.autoCheckClick = this.autoCheckClick.bind(this);
        this.handleWeekSelect = this.handleWeekSelect.bind(this);
        this.handleDaySelect = this.handleDaySelect.bind(this);

        this.state = {
            "sending": false,
            "successful": false,
            "fullname": "",
            "queueName": "",
            "inputNameClass": "",
            "submitButtonClass": "disabled",
            "collapseTarget": "",
            "collapseComponentId": "collapseSend", "queueNameForCollapse": "",
            "auto": false,
            "private": false,
            "password": "",
            "passwordClass": "",
            "generationType": "two_week",
            "generationDay": "monday",
            "showPriorityModal": false
        }

    }

    sendRequest() {
        if (this.state.submitButtonClass === "disabled" || (this.state.private && this.state.password === "")) {
            return;
        }
        this.setState({
            "sending": true, "collapseTarget": "", "collapseComponentId": "collapseSendOpened"
            , "queueNameForCollapse": this.state.fullname
        });
        let password = this.state.private ? "password=" + this.state.password + "&" : "";
        let auto = this.state.auto ? "&generation_type=" + this.state.generationType : "";
        fetch("api/queue?"
            + "queue_name=" + this.state.queueName + "&"
            + "fullname=" + this.state.fullname + "&"
            + password + auto, {"method": "post"})
            .then(response => {

                    if (response.ok) {
                        this.setState({"successful": true});
                        window.location.reload();
                    } else {
                        this.setState({"successful": false})
                    }

                    this.setState({"sending": false});

                }
            ).catch(err => {
            this.setState({"sending": false});
            console.log("Error while sending request : " + err)
        })
    }

    handleNameInput(event) {
        if (/^[a-zA-Z0-9-_]+$/.test(event.target.value)) {
            if (/[^\s]+/.test(document.getElementById("inputFullname").value) && (!this.state.private || /[^\s]+/.test(this.state.password))) {
                this.setState({
                    "inputNameClass": "is-valid",
                    "submitButtonClass": "",
                    "collapseTarget": "#collapseSend"
                })
            } else {
                this.setState({"inputNameClass": "is-valid", "submitButtonClass": "disabled", "collapseTarget": ""})
            }
        } else {
            this.setState({"inputNameClass": "is-invalid", "submitButtonClass": "disabled", "collapseTarget": ""})
        }
        this.setState({"queueName": event.target.value});

        fetch("api/check?check=queue_exist&queue_name=" + event.target.value)
            .then(resp => resp.json())
            .then(data => {
                if (data["exist"] === true) {
                    this.setState({
                        "inputNameClass": "is-invalid",
                        "submitButtonClass": "disabled",
                        "collapseTarget": ""
                    })
                }
            })
            .catch(err => console.log(err));

    }

    handleFullnameInput(event) {
        if (/[^\s]+/.test(event.target.value) && this.state.inputNameClass === "is-valid" && (!this.state.private || /[^\s]+/.test(this.state.password))) {
            this.setState({"submitButtonClass": "", "collapseTarget": "#collapseSend"})
        } else {
            this.setState({"submitButtonClass": "disabled", "collapseTarget": ""})
        }
        this.setState({"fullname": event.target.value});
    }

    handlePasswordInput(event) {

        if (/[^\s]+/.test(event.target.value)) {
            this.setState({"passwordClass": "is-valid"})
        } else {
            this.setState({"passwordClass": "is-invalid"})
        }

        if (/[^\s]+/.test(document.getElementById("inputFullname").value) && /[^\s]+/.test(document.getElementById("inputName").value) && /[^\s]+/.test(event.target.value)) {
            this.setState({"submitButtonClass": "", "collapseTarget": "#collapseSend"})
        } else {
            this.setState({"submitButtonClass": "disabled", "collapseTarget": ""})
        }

        this.setState({"password": event.target.value});
    }

    privateCheckClick(event) {
        this.setState({"private": event.target.checked});
        if (/[^\s]+/.test(document.getElementById("inputFullname").value) && /[^\s]+/.test(document.getElementById("inputName").value) && (!event.target.checked || /[^\s]+/.test(this.state.password))) {
            this.setState({"submitButtonClass": "", "collapseTarget": "#collapseSend"})
        } else {
            this.setState({"submitButtonClass": "disabled", "collapseTarget": ""})
        }
    }

    autoCheckClick(event) {
        this.setState({"auto": event.target.checked});
    }

    handleWeekSelect(event) {
        this.setState({"generationType": event.target.value});
    }

    handleDaySelect(event) {
        this.setState({"generationDay": event.target.value});
    }

    render() {
        return (
            <div>
                <form className="form-signin">
                    <div className="text-center mb-4">
                        <h1 className="display mb-3 font-weight-normal">HELIOS</h1>
                        <p>Если вы не знаете что делать, смотрите <a
                            href="https://apploidx.github.io/helios-doc/wiki/usage/queue-creation.html"
                            className='text-primary'>Документацию</a></p>
                    </div>

                    <div className="form-group" data-aos={"slide-up"} data-aos-duration={800}>
                        <input type="text" id="inputName" className={"form-control " + this.state.inputNameClass}
                               placeholder="Короткое имя для ссылки" name="queueName" value={this.state.queueName}
                               onChange={this.handleNameInput} required autoFocus/>
                    </div>

                    <div className="form-group"  data-aos={"slide-up"} data-aos-duration={1200}>
                        <input type="text" id="inputFullname" className="form-control" name="fullname"
                               value={this.state.fullname} placeholder="Полное имя очереди"
                               onChange={this.handleFullnameInput} required/>
                    </div>

                    <div className="row justify-content-center justify-content-between ml-2" data-aos="flip-up" data-aos-delay={400}>
                        <div className="form-check form-group col-auto">
                            <input className="form-check-input" type="checkbox" value="" id="privateCheck"
                                   onClick={this.privateCheckClick}/>
                            <label className="form-check-label" htmlFor="privateCheck">Приватная</label>
                            <span className={"ml-1"}>
                        <i className={"fa fa-question-circle"} data-toggle={"tooltip"} title={"Очередь с паролью"}/>
                    </span>
                        </div>
                        <div className="form-check form-group col-auto">
                            <input className="form-check-input" type="checkbox" value="" id="autoCheck"
                                   onClick={this.autoCheckClick}/>
                            <label className="form-check-label" htmlFor="autoCheck">Автогенерируемая</label>
                            <span className={"ml-1"}>
                        <i className={"fa fa-question-circle"} data-toggle="tooltip"
                           title={"Очередь которая будет автоматически генерироваться"}/>
                    </span>
                        </div>
                    </div>

                    {this.state.private ?
                        <div className="form-group">
                            <input type="text" id="queuePassword" className={"form-control " + this.state.passwordClass}
                                   name="Password" value={this.state.password} placeholder="Пароль очереди"
                                   onChange={this.handlePasswordInput} required/>


                        </div>
                        :
                        <div></div>}

                    {this.state.auto ?
                        <div>
                            <div className="form-group">
                                <label htmlFor="autoTimeSelect">Частота генерации</label>
                                <select className="form-control" id="autoTimeSelect" onChange={this.handleWeekSelect}>
                                    <option value={"two_week"} defaultChecked={true}>Каждые две недели</option>
                                    <option value={"one_week"}>Каждую неделю</option>
                                </select>
                            </div>
                            <div className="form-group mt-1">
                                <select className={"form-control"} id="autoDaySelect" onChange={this.handleDaySelect}>
                                    <option value="monday" defaultChecked={true}>Понедельник</option>
                                    <option value="tuesday">Вторник</option>
                                    <option value="wednesday">Среда</option>
                                    <option value="thursday">Четверг</option>
                                    <option value="friday">Пятница</option>
                                    <option value="saturday">Суббота</option>
                                    <option value="sunday">Воскресенье</option>
                                </select>
                            </div>

                        </div> : <div></div>}

                    <div className={"form-group d-flex justify-content-between"}>
                        <button className={"btn btn-outline-secondary"} type="button"
                                onClick={() => this.setState({showPriorityModal: true})}>
                            Настройка приоритетов
                        </button>
                        <button className={"btn btn-primary float-right " + this.state.submitButtonClass} type="button"
                                data-toggle="collapse" data-target={this.state.collapseTarget} aria-expanded="false"
                                aria-controls="collapseSend" onClick={this.sendRequest}>
                            Создать
                        </button>

                    </div>

                    <PriorityPickModal onHide={() => this.setState({showPriorityModal: false})}
                                       show={this.state.showPriorityModal}/>

                    <div className="form-group collapse" id={this.state.collapseComponentId}>
                        <div className="card card-body text-center">
                            {this.state.sending ? <div><p>Создание очереди</p><RoundedSpinner/></div>
                                :
                                this.state.successful ? <p className="text-success">Очередь успешно создана</p> :
                                    <p className="text-danger">Не удалось создать
                                        очередь. <br/>{this.state.queueNameForCollapse}</p>}
                        </div>
                    </div>

                    <p className="mt-5 mb-3 text-muted text-center">&copy; ITMO 2019</p>
                </form>

            </div>)

    }
}
