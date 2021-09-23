import React from 'react';

export default class RoundedSpinner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"spinner-border " + this.props.className} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    }
}