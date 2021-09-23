import React from "react";

export default class GrowingSpinner extends React.Component {
    render() {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-grow spinner-grow-lg text-muted" style={{"width": "3rem", "height": "3rem"}}
                     role="status">
                    <span className="sr-only">Loading...</span>
                </div>

            </div>)

    }
}

