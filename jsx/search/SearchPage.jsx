import React from 'react';
import SearchBar from './SearchBar.jsx';
import SearchResult from './SearchResult.jsx';
import ResultQueueLink from './ResultQueueLink.jsx';

export default class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loaded: false, searching: false, data: [], inputVal: "", searched: false};
        this.onSearchButtonClick = this.onSearchButtonClick.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        $(document).bind("keypress", e => {
            if (e.keyCode === 13) {
                e.preventDefault();
                this.onSearchButtonClick();
            }
        });
    }

    onSearchButtonClick() {
        this.setState({searching: true, loaded: false, searched: true});

        fetch("api/search/queue?queue_name=" + this.state.inputVal)
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    data: data.map((x, i) => <ResultQueueLink
                            shortName={x["queue_name"]}
                            name={x["queue_fullname"]}
                            alreadyExistInQueue={x["already_in_queue"]}
                            isPrivate={x["private"]}
                            membersCount={x["members_count"]}
                            creationDate={x["creation_date"]}
                        />
                    ), searching: false, loaded: true
                })
            })
            .catch(err => {
                console.log(err);
                this.setState({searching: false, loaded: false});
            });
    };

    onInputChange(value) {
        this.setState({inputVal: value});
    };

    render() {
        return (
            <div className="container">
                <br/>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-12 col-lg-10">
                        <div data-aos="slide-up" data-aos-duration="800"><SearchBar
                            onSearchButtonClick={this.onSearchButtonClick} onInputChange={this.onInputChange}/></div>
                        <div><SearchResult loaded={this.state.loaded}
                                           searching={this.state.searching}
                                           data={this.state.data}
                                           searched={this.state.searched}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}