import React from 'react';
import SearchDropdown from './SearchDropdown.jsx';

export default class GroupsNavbar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showSearchDropdown: false,
            searchData : [],
            isNowSearching : false,

            searchInputVal: "",
            errorOnFetchGroups: false

        };

        this.fetchGroups = this.fetchGroups.bind(this);
        this.onSearchInput = this.onSearchInput.bind(this);
    }

    componentDidMount(){
        $(document).bind("keypress", e => {
            if (e.keyCode === 13) {
                e.preventDefault();
                this.fetchGroups();
            }
        });
    }

    fetchGroups(){
        if (this.state.searchInputVal === ""){
            return;
        }

        this.setState({isNowSearching: true});

        fetch("/api/groups.search?q=" + this.state.searchInputVal)
            .then(data => data.json())
            .then(jsonData => {
                let groups = jsonData['groups'];
                this.setState({searchData: groups, errorOnFetchGroups: false});
            })
            .catch(e =>{
                console.log(e);
                this.setState({errorOnFetchGroups: true});
            })
            .finally(() => {
                this.setState({isNowSearching: false})
            })
    }

    onSearchInput(event){
        this.setState({searchInputVal: event.target.value});
    }

    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-brand" href="#/myprofile">Groups</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fa fa-ellipsis-h"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mr-3">

                        {/*You can toggle active .class*/}

                        <li className="nav-item">
                            <a className="nav-link active" href="#/mygroups">Мои группы </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#/open-groups">Публичные группы</a>
                        </li>

                        <li className="nav-item">
                            <div className={"position-relative"}>
                                <form className="form-inline">
                                    <input type="text"
                                           onFocus={() => this.setState({showSearchDropdown: true})}
                                           onBlur={() => this.setState({showSearchDropdown: false})}
                                           placeholder={"Найти группу"} className={"form-control"} style={{boxShadow: 'none'}}/>
                                </form>

                                {
                                    this.state.showSearchDropdown &&
                                    <SearchDropdown data={this.state.searchData} state={this.state.isNowSearching} />
                                }

                            </div>

                        </li>
                    </ul>

                </div>
            </nav>
        )
    }
}