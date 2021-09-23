import React from 'react';
import RoundedSpinner from './../util/RoundedSpinner.jsx';


export default class SearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isEmpty: false};
    }

    componentWillReceiveProps(newProps) {
        this.setState({isEmpty: newProps.data.length === 0});
    }

    render() {
        return (
            <div className="my-3 p-3 bg-white rounded shadow-sm">
                <h6 className="border-bottom border-gray pb-2 mb-0">Найдено:</h6>
                <ul className={"list-group"}>
                    {this.props.loaded ?
                        this.state.isEmpty ? "Ничего не найдено" : this.props.data.map((x, i) => {
                            return <li key={i} className="list-group-item">{x}</li>
                        })
                        :
                        this.props.searching ? <li className="mx-auto list-group-item border-0"><RoundedSpinner/></li>
                            :
                            <li className={"list-group-item mx-auto border-0"}>
                                {this.props.searched ? "Download error" : ""}
                            </li>}
                </ul>
            </div>
        )
    }
}