import React from 'react';
import Comment from './Comment.jsx';
import TimeUtil from './../../util/TimeUtil.js';

export default class Commentaries extends React.Component {

    constructor(props){
        super(props);
        this.state = {comments: []};
        this.fetchComments = this.fetchComments.bind(this);
    }

    componentDidMount(){
        if (this.props.user !== null)
        this.fetchComments(this.props);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.user !== null)
        this.fetchComments(newProps);
    }

    fetchComments(props){
        console.log(props);
        fetch(`/api/commentaries?username=${props.user.user.username}`)
            .then(resp => {
                if (resp.status === 200){
                    return resp.json();
                }
                alert(resp.status);
                    return null;

            })
            .then(resp => {
                if (resp !== null) this.setState({comments: resp.reverse()})
            })
    }

    render(){
        return (
            <main role="main" className="container">
                <div className="d-flex align-items-center p-3 my-3 bg-purple rounded shadow-sm justify-content-between"
                     data-aos='slide-up'>
                    <div className={"d-flex"}>
                        <div className="lh-100 d-flex flex-row">
                            <h6 className="ml-3 mb-0 text-black lh-100 my-auto">
                                Комментарии
                            </h6>
                        </div>

                    </div>


                </div>


                <div className="my-3 p-3 bg-white rounded shadow-sm" data-aos='fade-up' data-aos-duration='900'>
                    <div className={"border-bottom justify-content-between d-flex flex-column flex-md-row mr-md-2"}>
                        <div>

                            <h6 className=" border-gray pb-2 mb-0">
                                Мои комментарии
                            </h6>
                        </div>
                    </div>


                    <ul className={"pl-1 pt-2"}>
                        <li style={{listStyle: 'none'}}>
                            {   this.state.comments.length > 0 ?
                                this.state.comments.map((x, i) => {
                                    return <li key={i}><Comment
                                    heading={this.props.user['user']['user_type'] === "TEACHER"?
                                        x['target']['first_name'] + " " + x['target']['last_name']
                                        :
                                        "Преподаватель: " + x['author']['last_name']
                                    }
                                    time={TimeUtil.getFormattedTime(x['creation_date'])}
                                    text={x['text']}
                                    commentId={x['id']}
                                    onCommentDelete={() => this.fetchComments(this.props)}
                                    /></li>
                                })
                            :
                            <p className={"text-secondary mx-auto"}>Пусто</p>}
                        </li>

                    </ul>

                </div>

            </main>
        )
    }
}