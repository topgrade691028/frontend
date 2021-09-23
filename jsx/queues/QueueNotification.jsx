import React from 'react';

export default class QueueNotification extends React.Component {

    render() {
        return (
            <div className="media pt-3">
                <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                    <div className="d-block text-gray-dark">
                        <div className="d-flex justify-content-between">
                            <div className={"d-inline"}><strong>{this.props.author}</strong></div>
                            <div className={"d-inline"}>{this.props.time}</div>
                        </div>
                    </div>
                    <div className={"text-left"}>
                        {this.props.message}
                    </div>

                </p>
            </div>
        )
    }
}