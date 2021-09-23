import React from 'react';
import Modal from 'react-bootstrap/Modal.js';
import InputForm from './PriorityInputForm.jsx';
import Button from 'react-bootstrap/Modal.js';

export default class PriorityPickModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {forms: [], fromIds: 0};
        PriorityPickModal.onDelete = PriorityPickModal.onDelete.bind(this);
        this.addPriority = this.addPriority.bind(this);
    }

    static onDelete(event) {
        $("#" + event.currentTarget.parentNode.id).remove();
    }

    addPriority() {
        let stateForms = this.state.forms;
        let id = this.state.fromIds;
        stateForms.push(<InputForm formId={"priority_input_form_" + id} onDelete={PriorityPickModal.onDelete}/>);
        this.setState({forms: stateForms, formIds: id + 1});
    }

    render() {
        return (
            <Modal {...this.props} size="lg" aria-labelledby="queue-all-notice-modal-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="queue-all-notice-modal-vcenter">
                        Настройка приоритетов
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputForm formId={"priority_input_formx1"} onDelete={PriorityPickModal.onDelete}/>
                    <InputForm formId={"priority_input_formx2"} onDelete={PriorityPickModal.onDelete}/>
                    <InputForm formId={"priority_input_formx3"} onDelete={PriorityPickModal.onDelete}/>
                    {/*{this.state.forms.map((x, i) => <li key={x.id} style={{listStyle: 'none'}}>{x}</li>)}*/}

                    <button className={"btn btn-link"} onClick={this.addPriority}>Добавить критерий приоритета</button>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide} className={"btn-primary"}>Закрыть</Button>
                </Modal.Footer>
            </Modal>
        )
    }

} 