import React from 'react';

export default class Comment extends React.Component {
    constructor(props){
        super(props);
        this.deleteComment = this.deleteComment.bind(this)
    }

    deleteComment(){
        fetch(`/api/commentaries?commentary_id=${this.props.commentId}`, {method: 'delete'})
            .then(resp => {
                if (resp.status === 200){
                    this.props.onCommentDelete();
                    return ;
                }

                return resp.json();

            })
            .then(resp => {
                alert(resp['error_description'])
            })
    }

    render(){
        return (
            <div className="alert alert-warning">

                <h5 className="alert-heading">{this.props.heading}</h5>

                <p className={"text-dark"}>{this.props.text}</p>
                <hr/>
                <div className={"d-inline justify-content-between w-100"}>
                    <p className="d-inline mb-0">{this.props.time}</p>
                    <button className={"btn btn-danger d-inline float-right" } onClick={this.deleteComment}>
                        <i className="fa fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        )
    }
}