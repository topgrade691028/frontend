import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
    }

    onInputChange(e) {
        this.props.onInputChange(e.target.value);
    }

    buttonClick(e) {
        this.props.onSearchButtonClick();
    }

    render() {
        return (
            <form className="card card-sm">
                <div className="card-body row no-gutters align-items-center">

                    <div className="col">
                        <input className="form-control form-control-lg form-control-borderless" type="search"
                               placeholder="Search topics or keywords" onChange={this.onInputChange}/>
                    </div>
                    <div className="col-sm-2 d-none d-sm-block">
                        <button className="btn btn-md ml-2 btn-success" type="button"
                                onClick={this.buttonClick}>Search
                        </button>
                    </div>
                    <br/>
                    <div className="col-sm-3 d-sm-none row no-gutters align-items-center">
                        <button className="btn-sm btn-primary mx-auto col-4 mt-2" type="button"
                                onClick={this.buttonClick}><i className="fas fa-search h5 text-body"></i></button>
                    </div>
                </div>
            </form>
        )
    }
}