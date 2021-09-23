import React from 'react';
import Navbar from './GroupsNavbar.jsx';
import SearchBar from './../search/SearchBar.jsx';
import GroupsList from './GroupsList.jsx';


export default class GroupsSearch extends React.Component {

    render(){
        return(
            <div>
                <Navbar />
                <div className={"w-75 text-center mx-auto"}>
                    <SearchBar/>
                </div>
            <div className={"w-75 mx-auto"}>
                <GroupsList/>

            </div>

            </div>
        )
    }
}

