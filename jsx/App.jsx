import React, { lazy, Suspense }  from 'react';
import ReactDOM from 'react-dom';

import {Route, HashRouter} from 'react-router-dom';

import Sidebar from './Sidebar.jsx';

const MainPage = (
    lazy(() => (
        import ('./MainPage.jsx')
    ))
);
const QueuePage = (
    lazy(() => (
        import('./queues/QueuePage.jsx')
    ))
);

const CreateQueuePage = (
    lazy(() => (
        import('./creation/CreateQueuePage.jsx')
    ))
);
const UserProfile = (
    lazy(() => (
        import('./user-profile/UserProfile.jsx')
    ))
);
const SearchPage = (
    lazy(() => (
        import('./search/SearchPage.jsx')
    ))
);
const ProfileSettingsPage = (
    lazy(() => (
        import('./user-profile-settings/UserProfileSettingsPage.jsx')
    ))
);
const GroupsPage = (
    lazy(() => (
        import('./groups/GroupsPage.jsx')
    ))
);

const GroupsSearch  = (
    lazy(() => (
        import('./groups/GroupsSearch.jsx')
    ))
);

const Commentaries = (
    lazy(() => (
        import('./user-profile/commentaries/Commentaries.jsx')
    ))
);

const LoadingMessage = () => (
    "I'm loading..."
);


class ContentPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {user : null};
        this.updateUser = this.updateUser.bind(this);
    }

    componentDidMount() {
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
                $(this).toggleClass('active');
            });
            $('.sidebar-link').on('click', function () {
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    $('#sidebar').toggleClass('active');
                    $('#sidebarCollapse').toggleClass('active');
                }

            });
        });

        this.updateUser();

    }

    updateUser(){
        fetch('api/user')
            .then(response => {
                if (response.status === 400 || response.status === 401) {document.location.href = "/api/auth";}
                return response.json()
            })
            .then(resp => this.setState({user : resp}))
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
                <Sidebar content={
                    <HashRouter>
                        <div>
                            <div>
                                <Suspense fallback={<LoadingMessage/>}>
                                    <Route exact path="/" component={MainPage}/>
                                    <Route exact path="/queue/:id" render={(props) => <QueuePage {...props} user = {this.state.user} updateUser={this.updateUser}/>}/>
                                    <Route exact path="/create" component={CreateQueuePage}/>
                                    <Route exact path="/myprofile" render={(props) => <UserProfile {...props} user={this.state.user}/>}/>
                                    <Route exact path="/search" component={SearchPage}/>
                                    <Route exact path="/profile-settings" render={(props) => <ProfileSettingsPage {...props} user={this.state.user}/>}/>
                                    <Route exact path="/mygroups" render={(props) => <GroupsPage {...props} user={this.state.user}/>}/>
                                    <Route exact path="/groups-search" render={(props) => <GroupsSearch {...props} user={this.state.user}/>}/>
                                    <Route exact path="/myprofile/commentaries" render={(props) => <Commentaries {...props} user={this.state.user}/>}/>
                                </Suspense>

                            </div>
                        </div>
                    </HashRouter>}/>
        )
    }
}

ReactDOM.render(
    <ContentPage/>
    ,
    document.getElementById('contentReact')
);