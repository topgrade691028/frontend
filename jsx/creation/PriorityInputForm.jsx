import React from 'react';

export default class PriorityInputForm extends React.Component {
    render() {
        return (
            <div className="row mt-1" id={this.props.formId}>
                <div className="col-8">
                    <input type="text" className="form-control" placeholder="Критерий"/>
                </div>
                <div className="col-3">
                    <input type="text" className="form-control" placeholder="Приоритет"/>
                </div>
                <button className={"btn btn-link col-1 text-danger"} onClick={this.props.onDelete}><i
                    className={"fa fa-trash"}></i></button>
            </div>
        )
    }
}